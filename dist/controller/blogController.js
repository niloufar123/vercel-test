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
// import mongoose, { Collection, FilterQuery, ObjectId } from 'mongoose';
const Blog = require("../models/Blog");
// import {Blog } from '../models/blog'
exports.getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postsNumber = yield Blog.find({ status: "public" }).countDocuments();
        const posts = yield Blog.find({ status: "public" });
        if (!posts) {
            const error = new Error();
            error.code = '404';
            error.message = "there is no post in our database";
            throw error;
        }
        res.status(200).json({
            posts, total: postsNumber
        });
    }
    catch (err) {
        const error = new Error(err);
        error.code = '400';
        error.errno = err;
        throw error;
    }
});
exports.getSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Blog.findOne({ _id: req.params.id });
        if (!post) {
            // const error:NodeJS.ErrnoException=new Error("we couldn't find your post ")
            // error.code='400';
            // throw error;
            // const error:{statusCode:any,..} = new Error("پستی با این شناسه یافت نشد");
            // error.statusCode = 404;
            // throw error;
            throw new Error('Something went wrong');
        }
        res.status(200).json({ post });
    }
    catch (err) {
        console.log("errr", err);
        next(err);
    }
});
//# sourceMappingURL=blogController.js.map