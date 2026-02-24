import {
  getMarcasDatabase,
  getModelosDatabase,
  getColoresDatabase,
  addMatriculaDatabase,
} from "../database/vehiculo.database.js";

export const getMarcasController = async (req, res) => {
  try {
    const result = await getMarcasDatabase();
    return res.status(200).json({
      success: true,
      env: process.env.NODE_ENV,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      env: process.env.NODE_ENV,
      success: false,
      message: error.message,
    });
  }
};

export const getModelosController = async (req, res) => {
  try {
    const { marca } = req.params;
    const result = await getModelosDatabase(marca);
    return res.status(200).json({
      success: true,
      env: process.env.NODE_ENV,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      env: process.env.NODE_ENV,
      success: false,
      message: error.message,
    });
  }
};

export const getColoresController = async (req, res) => {
  try {
    const result = await getColoresDatabase();
    return res.status(200).json({
      success: true,
      env: process.env.NODE_ENV,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      env: process.env.NODE_ENV,
      success: false,
      message: error.message,
    });
  }
};

export const addMatriculaController = async (req, res) => {
  try {
    const { dni, marca, modelo, color, matricula } = req.body;
    const payload = {
      dni,
      marca,
      modelo,
      color,
      matricula,
    };
    const result = await addMatriculaDatabase(payload);
    return res.status(200).json({
      success: true,
      env: process.env.NODE_ENV,
      data: `Matrícula regisrada con éxito.`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      env: process.env.NODE_ENV,
      success: false,
      message: error.message,
    });
  }
};
