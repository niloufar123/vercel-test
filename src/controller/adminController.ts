import * as express from 'express';

const Blog = require("../models/Blog");

exports.createNewBlog=async(req:express.Request,res:express.Response,next:any)=>{
    try {
        await Blog.create({...req.body})
        console.log('body',req.body)
    } catch (error) {
    next(error)       
    }

}