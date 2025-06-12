import { getDB } from "../data/database";

export const getTasks = async () => {
    const db = getDB();
    const tasks = await db.all("SELECT * FROM tasks");
    return tasks;
};

export const createTask = async (task: string) => {
    const db = getDB();
    const result = await db.run("INSERT INTO tasks (task) VALUES (?)", task);
    return result.lastID;
};

export const deleteTask = async (id: number) => {
    const db = getDB();
    const task = await db.get("SELECT * FROM tasks WHERE id = ?", id);

    if (!task) throw new Error("tarefa não encontrada");

    await db.run("DELETE FROM tasks WHERE id = ?", id);
    return task;
};

export const updateTask = async (id: number, updatedTask: string) => {
    const db = getDB();
    const task = await db.get("SELECT * FROM tasks WHERE id = ?", id);

    if (!task) throw new Error("tarefa não encontrada");

    await db.run("UPDATE tasks SET task = ? WHERE id = ?", updateTask, id);

    return { ...task, task: updateTask };
};
