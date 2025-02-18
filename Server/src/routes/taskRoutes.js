import express from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task/taskcontroller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/task/create" ,createTask)
router.get("/tasks"  , getTasks)
router.get("/task/:id" , protect , getTask)
router.patch("/task/:id" , protect , updateTask)
router.delete("/task/:id" , deleteTask)

export default router;