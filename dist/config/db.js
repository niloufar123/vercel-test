"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`db connected to1 : ${process.env.MONGODB_URI} `);
    try {
        const con = yield mongoose_1.default.connect('mongodb+srv://vercel-admin-user-655e16d49515342489998d39:07IGSDsI24FfnjC2@cluster0.fk3nt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`db connected to2 : ${process.env.MONGODB_URI} `);
    }
    catch (error) {
        console.log(error);
        throw error;
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map