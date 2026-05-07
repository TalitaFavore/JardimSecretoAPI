import express from 'express';
import typeController from '../controller/typeController.js';

const router = express.Router();

router.get('/', typeController.getAll);
router.post('/', typeController.create);

export default router;







