import express from 'express';
import bookController from '../controllers/book-controller.js';
const router = express.Router()

router.get('/', bookController.findAll)
router.get('/:id', bookController.findById)
router.post('/', bookController.create)

export default router;