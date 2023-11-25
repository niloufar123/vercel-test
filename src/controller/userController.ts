
import * as express from 'express';
const User=require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { sendEmail } = require("../utils/mailer");
exports.createUser = async (req:express.Request, res:express.Response,next:any) => {
    const errors = [];
    try {
        await User.userValidation(req.body);
        const { fullname, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            const error:NodeJS.ErrnoException = new Error()
            error.code = '422';
            throw error;
        } else {
            bcrypt.hash(password, 10,async (err:any, hash:any) => {
                console.log('hash',hash)
                if (err) return next(err);
        
                await User.create({ fullname, email, password:hash });
                
            });

            //? Send Welcome Email
            // sendEmail(
            //     email,
            //     fullname,
            //     "Wellcome our dear User",
            //     );

            res.status(201).json({ message: "Registration was successful" });
        }
    } catch (err) {
        next(err);
    }
};



exports.handleLogin=async(req:express.Request,res:express.Response,next:any)=>{
    const {email,password}=req.body
    try {
       let user=await User.findOne({email})
    

        if(!user){
            const error:NodeJS.ErrnoException = new Error("We couldn't find the user")
            error.code = '404';
            throw error;
        }
        const isEqual=await bcrypt.compare(password,user.password)
        if(isEqual){
            let userCon={
                userId:user._id,
                fullname:user.fullname,
                email:user.email
            }
            jwt.sign({userCon},process.env.TOKEN_SECRET,{expiresIn:"1h"},(err:any,token:string)=>{
                res.json({token})
            })



        }else{
            const err:NodeJS.ErrnoException=new Error("Password is incorrect")
            err.code='422';
            throw err
        }
        
    } catch (error) {
        next(error)
    }
}