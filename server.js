import express from 'express';
import router from './routes/book-route.js';
import * as dotenv from 'dotenv';
import db_modele from './models/repositories/db_repo.js';
import { connectDB } from './models/config/db.js';
import routerrdv from './routes/rdv_route.js';
import cors from 'cors';

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const port = 3001;
const version = "v1";

connectDB();
db_modele();



//config Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: 'http://localhost:3001/api/v1/',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json()); 
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(`/api/${version}/rdv`, routerrdv);
app.use(`/api/${version}/book`, router);

// const corsOptions = {
//   origin: ['http://localhost:5173', 'https://localhost:5173'],
// };

// router.use(cors(corsOptions));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});