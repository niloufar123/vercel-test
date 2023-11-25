"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import  dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// const fs = require('fs')
// const https = require('https')
// const path=require('path')
// const cors = require('cors');
//  import blogRoutes from './routes/blogs'
//  import userRoutes from './routes/users'
// import connectDB from './config/db';
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
if (process.env.MONGO_URL) {
    throw new Error("add Your mongo url");
}
// app.use(cors());
//-------------------------- Load Config
// dotenv.config({ path: "./config/config.env" });
//--------------------------database connectio
// connectDB()
// app.use(bodyParser.json())
//--------------------------routes
// app.use("/",blogRoutes)
// app.use("/users",userRoutes)
app.get('/', (req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => console.log(`Server : ${port}`));
//# sourceMappingURL=index.js.map