import express from "express";
import { getSocioByDniController } from "../controllers/socio.controller.js";
import {
  getMarcasController,
  getModelosController,
  getColoresController,
  addMatriculaController,
} from "../controllers/vehiculo.controller.js";

export const router = express.Router();

router.get("/usuario/:dni", getSocioByDniController);
router.get("/vehiculo/marcas", getMarcasController);
router.get("/vehiculo/modelos/:marca", getModelosController);
router.get("/vehiculo/colores", getColoresController);
router.post("/vehiculo/matricula", addMatriculaController);
