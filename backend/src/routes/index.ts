import { Router } from 'express';
import costumerRoutes from './Costumers';

const app = Router();

app.use('/costumers', costumerRoutes);

export default app;