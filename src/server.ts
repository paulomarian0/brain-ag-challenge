// src/index.ts
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Bem-vindo ao meu servidor Node.js com TypeScript e CORS habilitado!"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
