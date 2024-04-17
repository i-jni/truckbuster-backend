
import express from 'express';
import router from './routes/book-route.js';
import * as dotenv from 'dotenv';
import db_modele from './models/repositories/db_repo.js';
import { connectDB } from './models/config/db.js';
import routerrdv from './routes/rdv_route.js';

dotenv.config();
const app = express()
const port = 3001
const version = "v1"

connectDB()
db_modele()

app.use(express.json()); 


app.use(`/api/${version}/rdv`, routerrdv)


app.use(`/api/${version}/book`, router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})