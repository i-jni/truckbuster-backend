
import express from 'express';
import rdvController from '../controllers/rdv_controller.js';


const routerrdv = express.Router();

routerrdv.get('/', rdvController.findAll);
routerrdv.get('/:id', rdvController.findById);
routerrdv.post('/create', rdvController.create);

export default routerrdv;