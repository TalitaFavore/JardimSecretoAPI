import express from 'express';
import typeController from '../controller/typeController.js';

const router = express.Router();

router.get('/', typeController.getAll);

export default router;







