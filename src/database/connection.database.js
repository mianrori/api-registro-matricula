import config from "../../config.js";
import oracledb from "oracledb";

export const connect = async (username, password) => {
  try {
    oracledb.initOracleClient({ libDir: config.oracleClient });
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

    console.info(
      `Conectando a ${config.dbHost}:${config.dbPort}/${config.dbSid}.`,
    );
    const connection = await oracledb.getConnection({
      username: username,
      password: password,
      connectString: `${config.dbHost}:${config.dbPort}/${config.dbSid}`,
    });
    console.info(
      `Conectado a ${config.dbHost}:${config.dbPort}/${config.dbSid}`,
    );
    return connection;
  } catch (error) {
    console.error(
      `Error conectando a ${config.dbHost}:${config.dbPort}/${config.dbSid}: ${error}`,
    );
    throw new Error(
      `Error conectando a ${config.dbHost}:${config.dbPort}/${config.dbSid}: ${error.message.replace(/['"]+/g, "")}`,
    );
  }
};
