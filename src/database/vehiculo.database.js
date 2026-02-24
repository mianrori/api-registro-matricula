import oracledb from "oracledb";
import { getConnection } from "../services/connectionManager.service.js";

export const getMarcasDatabase = async () => {
  try {
    const { connection } = getConnection(1);
    const result = await connection.execute(
      `SELECT DISTINCT a.marca
        FROM cf_socio_vehiculo a
        WHERE a.marca IS NOT NULL
        ORDER BY a.marca`,
    );
    let marcas = [];
    for (const row of result.rows) {
      marcas.push(row.MARCA);
    }
    return marcas;
  } catch (error) {
    console.error(`Error en getMarcasDatabase: ${error}`);
    throw new Error("Error al obtener marcas de vehículos");
  }
};

export const getModelosDatabase = async (marca) => {
  try {
    const { connection } = getConnection(1);
    const result = await connection.execute(
      `SELECT DISTINCT a.modelo
        FROM cf_socio_vehiculo a
        WHERE a.marca = :marca
          AND a.modelo IS NOT NULL
        ORDER BY a.modelo`,
      { marca },
    );
    let modelos = [];
    for (const row of result.rows) {
      modelos.push(row.MODELO);
    }
    return modelos;
  } catch (error) {
    console.error(`Error en getModelosDatabase: ${error}`);
    throw new Error("Error al obtener modelos de vehículos");
  }
};

export const getColoresDatabase = async () => {
  try {
    const { connection } = getConnection(1);
    const result = await connection.execute(
      `SELECT DISTINCT a.color
        FROM cf_socio_vehiculo a
        WHERE a.color IS NOT NULL
        ORDER BY a.color`,
    );
    let colores = [];
    for (const row of result.rows) {
      colores.push(row.COLOR);
    }
    return colores;
  } catch (error) {
    console.error(`Error en getColoresDatabase: ${error}`);
    throw new Error("Error al obtener colores de vehículos");
  }
};

export const addMatriculaDatabase = async (payload) => {
  try {
    const { connection } = getConnection(1);
    const result = await connection.execute(
      `BEGIN sp_alta_matricula(:payload); END;`,
      {
        payload: {
          dir: oracledb.BIND_IN,
          type: oracledb.STRING,
          val: JSON.stringify(payload),
        },
      },
    );
    console.log("Resultado de addMatriculaDatabase:", result.outBinds.data);
    return result.outBinds.data;
  } catch (error) {
    console.error(`Error en addMatriculaDatabase: ${error}`);
    throw new Error(error.message.replace(/\n/g, " ").replace(/['"]+/g, ""));
  }
};
