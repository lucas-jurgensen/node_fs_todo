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

        if (!task) {
            res.status(400).json({ error: "precisa criar uma task" });
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
        const { id } = req.query;

        if (!id || isNaN(Number(id))) {
            res.status(400).json({ error: "id inválido" });
            return;
        }

        const deletedTask = await deleteTask(id);
        res.status(200).json({
            message: "tarefa deletada com sucesso",
            task: deletedTask,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "erro ao deletar tarefa" });
    }
};

export const handleUpdateTask: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;

        if (!task) {
            res.status(400).json({ erro: "atualização de tarefa invalida" });
            return;
        }

        const updatedTask = await updateTask(id, task);
        res.status(200).json({
            message: "tarefa atualizada com sucesso",
            task: updatedTask,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "erro ao atualizar a tarefa" });
    }
};
