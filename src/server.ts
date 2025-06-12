import express from "express";
import cors from "cors";
import { initDB } from "./data/database";
import routes from "./routes/taskRoutes";

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
    try {
        await initDB();

        app.use("/", routes);

        app.use((req, res) => {
            res.status(404).json({ error: "rota não encontrada" });
        });

        app.listen(3000, () => {
            console.log("servidor rodando em http://localhost:3000");
        });
    } catch (error) {
        console.error("erro ao iniciar o servidor:", error);
    }
})();
