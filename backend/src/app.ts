import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Database Connected!"));

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log("📘 Swagger Docs Ready at /api-docs");

export default app;
