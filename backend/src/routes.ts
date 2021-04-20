import { Router } from 'express';
import CostumerController from './app/controllers/CostumerController';

const router = Router();

// Create
router.post('/costumers', CostumerController.store);

// List
router.get('/costumers', CostumerController.listAll)
export default router;

// Update
router.put('/costumers/:id', CostumerController.update);

// Delete
router.delete('/costumers/:id', CostumerController.delete);