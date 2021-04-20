import { Router } from 'express';
import CostumerController from '../app/controllers/CostumerController';

const router = Router();

// Create
router.post('/', CostumerController.store);

// List
router.get('/', CostumerController.listAll)

// List by Id
router.get('/:id', CostumerController.listById)

// Update
router.put('/:id', CostumerController.update);

// Delete
router.delete('/:id', CostumerController.delete);

export default router;