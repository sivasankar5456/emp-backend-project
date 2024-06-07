
import express from 'express';
import db_connection from './utils/db.js'
import dotenv from 'dotenv';
import routers from './routes/routes.js'
import cors from 'cors'


dotenv.config();

const app = express() // NOTE: Assigning all features of express to app variable;

db_connection()
app.use(express.json())
app.use(cors())
// Informing server about all routers
app.use('/api', routers)

app.listen(process.env.PORT,()=>{
    console.log('Employee-Service Backend Server STARTED Successfully');
})











