import express from "express";
import { authMiddleware, checkAdmin } from "../middlewares/auth.middleware.js";
import { createProblem, deleteProblem, getAllProblems, getAllSolvedProblems, getProblemById, updateProblem } from "../controllers/problems.controller.js";

const problemRoutes = express.Router();

problemRoutes.post("/create-problem",authMiddleware,checkAdmin, createProblem);
problemRoutes.get("/get-all-problems",authMiddleware,getAllProblems)
problemRoutes.get("get-problem/:id", authMiddleware, getProblemById);
problemRoutes.put("/update-problem/:id", authMiddleware, checkAdmin, updateProblem);
problemRoutes.delete("/delete-problem/:id", authMiddleware, checkAdmin, deleteProblem);
problemRoutes.get("/get-solved-problems", authMiddleware, getAllSolvedProblems)
export default problemRoutes;