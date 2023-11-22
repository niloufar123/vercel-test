import mongoose, { model } from "mongoose";
const { YupSchema } = require("./secure/userValidation");


const UserModel=new mongoose.Schema({
    fullname:{
        type:String,
        require:[true,"fullName is required"],
        trim:true

    },
    email:{
        type:String,
        require:[true,"email is reqiured"],
        unique:[true,"email should be unique"]
    },
    password:{
        type:String,
        require:[true,"password should be unique"],
        minlength:4,
        maxlength:255
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})
UserModel.statics.userValidation = function (body) {
    return YupSchema.validate(body, { abortEarly: false });
};

const User=mongoose.model("User",UserModel)

module.exports=User