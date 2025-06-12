import { RequestHandler } from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../services/taskService";

export const handleGetTasks: RequestHandler = async (req, res) => {
    try {
        const tasks = await getTasks();
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "erro ao buscar as tarefas" });
    }
};

export const handleCreateTask: RequestHandler = async (req, res) => {
    try {
        const { task } = req.body;

        if (!task || typeof task !== "string") {
            res.status(400).json({ error: "precisa criar uma task válida" });
            return;
        }

        const id = await createTask(task);
        res.status(201).json({ task, id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "erro ao criar tarefa" });
    }
};

export const handleDeleteTask: RequestHandler = async (req, res) => {
    try {
        const idRaw = req.query.id || req.params.id;
        const id = Number(idRaw);

        if (!idRaw || isNaN(id)) {
            res.status(400).json({ error: "ID inválido" });
            return;
        }

        const deletedTask = await deleteTask(id);
        res.status(200).json({
            message: "tarefa deletada com sucesso",
            task: deletedTask,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erro ao deletar tarefa" });
    }
};

export const handleUpdateTask: RequestHandler = async (req, res) => {
    try {
        const idRaw = req.params.id;
        const id = Number(idRaw);
        const { task } = req.body;

        if (!task || typeof task !== "string") {
            res.status(400).json({ error: "atualização de tarefa inválida" });
            return;
        }

        if (!idRaw || isNaN(id)) {
            res.status(400).json({ error: "ID inválido" });
            return;
        }

        const updatedTask = await updateTask(id, task);
        res.status(200).json({
            message: "tarefa atualizada com sucesso",
            task: updatedTask,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erro ao atualizar a tarefa" });
    }
};
