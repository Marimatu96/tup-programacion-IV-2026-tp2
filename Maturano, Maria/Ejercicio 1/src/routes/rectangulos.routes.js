import { Router } from "express";
import { crear } from "../controllers/rectangulos.controller.js";
import { validarCreacion } from "../validators/rectangulos.validators.js";
import { validar } from "../middlewares/validar.js";

const router = Router();

router.post("/", validarCreacion, validar, crear);

export default router;