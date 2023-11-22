"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { YupSchema } = require("./secure/userValidation");
const UserModel = new mongoose_1.default.Schema({
    fullname: {
        type: String,
        require: [true, "fullName is required"],
        trim: true
    },
    email: {
        type: String,
        require: [true, "email is reqiured"],
        unique: [true, "email should be unique"]
    },
    password: {
        type: String,
        require: [true, "password should be unique"],
        minlength: 4,
        maxlength: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
UserModel.statics.userValidation = function (body) {
    return YupSchema.validate(body, { abortEarly: false });
};
const User = mongoose_1.default.model("User", UserModel);
module.exports = User;
//# sourceMappingURL=user.js.map