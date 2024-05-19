import { Router } from "express";
import { getGastos, getGastoByDNI, createGasto, updateGasto, deleteGasto } from "../controllers/gastos";

const gastoRoutes = Router();

gastoRoutes.get("/", getGastos);

gastoRoutes.get("/:dni", getGastoByDNI);

gastoRoutes.post("/", createGasto);

gastoRoutes.put("/:dni", updateGasto);

gastoRoutes.patch("/:dni", updateGasto);

gastoRoutes.delete("/:dni", deleteGasto);

export default gastoRoutes;