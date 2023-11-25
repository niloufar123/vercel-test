"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const fs = require('fs');
const https = require('https');
const path = require('path');
const cors = require('cors');
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(cors());
//-------------------------- Load Config
dotenv_1.default.config({ path: "./config/config.env" });
//--------------------------database connectio
// connectDB()
// app.use(bodyParser.json())
// //--------------------------routes
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