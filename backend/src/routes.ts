import { Router } from 'express';
import CostumerController from './app/controllers/CostumerController';

const router = Router();

// Create
router.post('/costumers', CostumerController.store);

// List
router.get('/costumers', CostumerController.listAll)

// List by Id
router.get('/costumers/:id', CostumerController.listById)

// Update
router.put('/costumers/:id', CostumerController.update);

// Delete
router.delete('/costumers/:id', CostumerController.delete);

export default router;