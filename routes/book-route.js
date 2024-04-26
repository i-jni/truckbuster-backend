import express from 'express';
import bookController from '../controllers/book-controller.js';
const router = express.Router()
/**

    @swagger
    /api/v1/book/:
    get:
    description: get a new rdv
    responses:
    '200':
    description: A successful response
     */
router.get('/', bookController.findAll)
router.get('/:id', bookController.findById)
router.post('/', bookController.create)

export default router;