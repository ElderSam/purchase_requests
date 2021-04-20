import { Router } from 'express';
import costumerRoutes from './Costumers';
import productRoutes from './Products';

const app = Router();

app.use('/costumers', costumerRoutes);
app.use('/products', productRoutes);

export default app;