import * as express from 'express';
import mongoose, { Collection, FilterQuery, ObjectId } from 'mongoose';

const Blog = require("../models/Blog");
// import {Blog } from '../models/blog'


exports.getIndex = async (req: express.Request, res: express.Response) => {
 
    try {
        const postsNumber = await Blog.find({status:"public"}).countDocuments()            

        const posts = await Blog.find({status:"public"})            

           

        if(!posts){
            const error:NodeJS.ErrnoException=new Error()
            error.code='404';
            error.message="there is no post in our database";
            throw error;
        }
        res.status(200).json({
            posts  ,total:postsNumber
        })

       
    } catch (err:any) {
        const error:NodeJS.ErrnoException=new Error(err)
            error.code='400';
            error.errno=err;
            throw error;
    }
}



exports.getSingleBlog=async(req:express.Request,res:express.Response,next:any)=>{

    try {
        const post = await Blog.findOne({_id:req.params.id})
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
    } catch (err:any) {
        console.log("errr",err)
        next(err);

    }
}

