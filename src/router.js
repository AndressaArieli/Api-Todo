import express from "express";
import taskController from "./controllers/tasksController.js";

const router = express.Router();

router.get("/tasks", taskController.getAll);

export default router;

//validar
//chamar
//retornar as funções
//responder as funçoes
