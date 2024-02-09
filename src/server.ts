// src/index.ts
import express from "express";
import cors from "cors";
import { appRoutes } from "./application/infra";
import { env } from "./helpers/env";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = env.PORT || 3000;

app.use(appRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
