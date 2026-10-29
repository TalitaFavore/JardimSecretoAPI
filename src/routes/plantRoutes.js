import express from 'express';
import plantController from '../controller/plantController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/search', plantController.search);
router.get('/', plantController.getAll);
router.get('/suculentas', plantController.getSuculentas);
router.get('/cactos', plantController.getCactos);
router.get('/:id', plantController.getById);

// Apenas administradores podem cadastrar
router.post('/', authMiddleware, adminMiddleware, plantController.create);

// Apenas administradores podem atualizar
router.put('/:id', authMiddleware, adminMiddleware, plantController.update);

// Apenas administradores podem deletar
router.delete('/:id', authMiddleware, adminMiddleware, plantController.remove);


export default router;