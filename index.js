import { connect } from "./src/database/connection.database.js";
import { addConnection } from "./src/services/connectionManager.service.js";
import config from "./config.js";
import express from "express";
import morganBody from "morgan-body";
import cors from "cors";
import { router } from "./src/routes/index.js";
import { basicAuthHelper } from "./src/helpers/basic-auth.helper.js";

const connection = await connect(config.dbUser, config.dbPassword);
const sessionId = 1;

addConnection(sessionId, {
  username: config.dbUser,
  connection,
});

const app = express();

morganBody(app, { maxBodyLength: 2000 });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/delsol/parking/api", basicAuthHelper, router);

app.listen(config.port, () => {
  console.log(
    `Server API-DELSOL-PARKING running on port ${config.port} in ${config.env} mode.`,
  );
});
