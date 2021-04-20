import { Router } from 'express';
import CostumerController from './app/controllers/CostumerController';

const router = Router();

router.post('/costumers', CostumerController.store);

export default router;