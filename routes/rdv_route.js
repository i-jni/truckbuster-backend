import express from 'express';
import rdvController from '../controllers/rdv_controller.js';

const routerrdv = express.Router();

/**

    @swagger
    /rdv:
    get:
    summary: Retrieve a list of JSONPlaceholder rd
    description: Use to request all rdvs
     */
    routerrdv.get('/', rdvController.findAll);



/**

    @swagger
    /rdv/{id}:
    get:
    description: Get rdv by id
    parameters:
    - name: id
    in: path
    required: true
    description: ID of the rdv to retrieve
    schema:
    type: string
    responses:
    '200':
    description: A successful response
     */
    routerrdv.get('/:id', rdvController.findById);



// /**

//     @swagger
//     /rdv/create:
//     post:
//     description: Create a new rdv
//     responses:
//     '200':
//     description: A successful response
//      */
routerrdv.post('/create', rdvController.create);
    
// check:



export default routerrdv;