import express from "express";
import cors from "cors";

// Importa os arquivos de rotas.
// Cada arquivo contém as rotas relacionadas a um recurso.
import plantRoutes from "./src/routes/plantRoutes.js";
import typeRoutes from "./src/routes/typeRoutes.js";
import userRoutes from './src/routes/userRoutes.js';

// Cria uma aplicação Express.
// A variável app representa toda a API.
const app = express();


// ==========================================
// MIDDLEWARES
// ==========================================

// Permite que aplicações de diferentes origens
// (por exemplo, um front-end React)
// possam acessar esta API.
app.use(cors());


// Permite que a API receba dados em formato JSON.
//
// Exemplo:
//
// {
//   "name": "Cacto"
// }
//
// Sem esta linha, req.body ficará vazio.
app.use(express.json());


// ==========================================
// ROTAS
// ==========================================

// Todas as rotas definidas em plantRoutes
// passarão a começar com "/plants".
//
// Exemplo:
// GET /plants
// POST /plants
//
app.use("/plants", plantRoutes);


// Todas as rotas definidas em typeRoutes
// passarão a começar com "/types".
//
// Exemplo:
// GET /types
// POST /types
// DELETE /types/1
//
app.use("/types", typeRoutes);
app.use("/users", userRoutes);


// Exporta a aplicação para ser utilizada
// pelo arquivo server.js
export default app;