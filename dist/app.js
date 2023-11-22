"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs = require('fs');
const https = require('https');
const path = require('path');
const cors = require('cors');
const blogs_1 = __importDefault(require("./routes/blogs"));
const users_1 = __importDefault(require("./routes/users"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(cors());
//-------------------------- Load Config
dotenv_1.default.config({ path: "./config/config.env" });
//--------------------------database connectio
(0, db_1.default)();
app.use(body_parser_1.default.json());
//--------------------------routes
app.use("/", blogs_1.default);
app.use("/users", users_1.default);
app.get('/', (req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => console.log(`Server : ${port}`));
//# sourceMappingURL=app.js.map