import express from 'express';
import typeController from '../controller/typeController.js';

// Cria um objeto Router.
// Ele será responsável por organizar as rotas
// relacionadas aos tipos.
const router = express.Router();
// ==========================================
// GET /types
// ==========================================
// Quando alguém acessar:
// http://localhost:3000/types
//
// Esta rota executa a função getAll()
// da Controller.
//
// Fluxo:
// Requisição → Route → Controller → Model → Banco
//
router.get('/', typeController.getAll);
// ==========================================
// POST /types
// ==========================================
// Quando alguém enviar uma requisição POST para:
// http://localhost:3000/types
//
// Esta rota executa a função create()
// da Controller.
//
// Exemplo de Body enviado:
//
// {
//   "name": "Cacto"
// }
//
router.post('/', typeController.create);
// ==========================================
// DELETE /types/:id
// ==========================================
// O ":id" representa um parâmetro da URL.
//
// Exemplo:
// DELETE /types/1
//
// Nesse caso:
// req.params.id = 1
//
// A rota chama a função remove()
// da Controller.
//
router.delete('/:id', typeController.remove);

// Exporta o router para que ele possa ser
// utilizado dentro do app.js
export default router;