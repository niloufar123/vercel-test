import  dotenv from 'dotenv';
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';
const fs = require('fs')
const https = require('https')
const path=require('path')
const cors = require('cors');

 import blogRoutes from './routes/blogs'
 import userRoutes from './routes/users'

import connectDB from './config/db';

const app=express();
const port = process.env.PORT || 3001

app.use(cors());

//-------------------------- Load Config
dotenv.config({ path: "./config/config.env" });

//--------------------------database connectio
connectDB()
app.use(bodyParser.json())

//--------------------------routes
app.use("/",blogRoutes)
app.use("/users",userRoutes)


app.get('/', (req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

app.listen(port,()=>  console.log(`Server : ${port}`))
