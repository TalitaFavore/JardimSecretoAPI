import express from 'express';
import cors from 'cors';

import plantRoutes from './src/routes/plantRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/plants', plantRoutes);

export default app;