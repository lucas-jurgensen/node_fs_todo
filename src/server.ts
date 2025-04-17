import express from "express";
import routes from "./routes/taskRoutes";

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("ok http://localhost:3000");
});
