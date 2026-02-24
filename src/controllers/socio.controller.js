import { getSocioByDniDatabase } from "../database/socio.database.js";

export const getSocioByDniController = async (req, res) => {
  try {
    const { dni } = req.params;
    const result = await getSocioByDniDatabase(dni);
    return res.status(result ? 200 : 404).json({
      success: result ? true : false,
      env: process.env.NODE_ENV,
      data: JSON.parse(result ? result.replace(/'/g, '"') : "{}" || "{}"),
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
