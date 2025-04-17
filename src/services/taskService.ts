import { writeFile, readFile } from "fs/promises";
import { json } from "stream/consumers";

const dataFile = "./src/data/tasks.json";

export const getTasks = async () => {
    const data = await readFile(dataFile, "utf-8");
    const tasks = JSON.parse(data);

    return tasks;
};

export const createTask = async (task: string) => {
    const tasks = await getTasks();
    const newID = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask = {
        id: newID,
        task,
    };

    tasks.push(newTask);
    await writeFile(dataFile, JSON.stringify(tasks, null, 2));

    return newID;
};

export const deleteTask = async (id) => {
    const tasks = await getTasks();

    const taskToDelete = tasks.find((task) => task.id === Number(id));

    if (!taskToDelete) {
        throw new Error("tarefa não encontrada");
    }

    const attTasks = tasks.filter((task) => task.id !== Number(id));
    await writeFile(dataFile, JSON.stringify(attTasks, null, 2));

    return taskToDelete;
};

export const updateTask = async (id, updatedTask: string) => {
    const tasks = await getTasks();

    const taskToUpdate = tasks.find((task) => task.id === Number(id));

    if (!taskToUpdate) {
        throw new Error("tarefa não encontrada");
    }

    taskToUpdate.task = updatedTask;

    await writeFile(dataFile, JSON.stringify(tasks, null, 2));
    return taskToUpdate;
};
