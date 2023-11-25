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
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { sendEmail } = require("../utils/mailer");
exports.createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    try {
        yield User.userValidation(req.body);
        const { fullname, email, password } = req.body;
        const user = yield User.findOne({ email });
        if (user) {
            const error = new Error();
            error.code = '422';
            throw error;
        }
        else {
            // bcrypt.hash(password, 10,async (err:any, hash:any) => {
            //     console.log('hash',hash)
            //     if (err) return next(err);
            yield User.create({ fullname, email, password });
            // });
            //? Send Welcome Email
            // sendEmail(
            //     email,
            //     fullname,
            //     "Wellcome our dear User",
            //     );
            res.status(201).json({ message: "Registration was successful" });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.handleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        let user = yield User.findOne({ email });
        if (!user) {
            const error = new Error("We couldn't find the user");
            error.code = '404';
            throw error;
        }
        // const isEqual=await bcrypt.compare(password,user.password)
        // if(isEqual){
        let userCon = {
            userId: user._id,
            fullname: user.fullname,
            email: user.email
        };
        jwt.sign({ userCon }, process.env.TOKEN_SECRET, { expiresIn: "1h" }, (err, token) => {
            res.json({ token });
        });
        // }else{
        // const err:NodeJS.ErrnoException=new Error("Password is incorrect")
        // err.code='422';
        // throw err
        // }
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=userController.js.map