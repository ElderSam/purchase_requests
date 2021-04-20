import { Router } from 'express';
import ProductController from '../app/controllers/ProductController';

const router = Router();

// Create
router.post('/', ProductController.store);

// List
router.get('/', ProductController.listAll)

// List by Id
router.get('/:id', ProductController.listById)

// Update
router.put('/:id', ProductController.update);

// Delete
router.delete('/:id', ProductController.delete);

export default router;