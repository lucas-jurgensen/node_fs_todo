import express from "express";
import { handleCreateTask, handleDeleteTask, handleGetTasks, handleUpdateTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "api funcionando" });
});

router.get("/tasks", handleGetTasks);

router.post("/task", handleCreateTask);

router.delete("/task", handleDeleteTask);

router.put("/task/:id", handleUpdateTask);

export default router;
