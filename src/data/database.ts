import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Database } from "sqlite";

let db: Database;

export const initDB = async () => {
    db = await open({
        filename: "./src/data/tasks.db",
        driver: sqlite3.Database,
    });

    await db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL
    )
  `);

    return db;
};

export const getDB = (): Database => {
    if (!db) throw new Error("DB not initialized. Call initDB() first.");
    return db;
};
