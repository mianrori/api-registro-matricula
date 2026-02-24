import oracledb from "oracledb";
import { getConnection } from "../services/connectionManager.service.js";

export const getSocioByDniDatabase = async (dni) => {
  try {
    const { connection } = getConnection(1);
    const result = await connection.execute(
      `BEGIN sp_verify_dni_veh(:dni,:data); END;`,
      {
        dni,
        data: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
      },
    );
    console.log("Resultado de getSocioByDniDatabase:", result.outBinds.data);
    return result.outBinds.data;
  } catch (error) {
    console.error(`Error en getSocioByDniDatabase: ${error}`);
    throw new Error(error.message.replace(/\n/g, " ").replace(/['"]+/g, ""));
  }
};
