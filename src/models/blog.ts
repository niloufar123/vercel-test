const mongoos = require("mongoose");

import { Schema } from "mongoose";



let  ObjectId = Schema.ObjectId;



export interface BlogType {
  _id: any;
  title?: string;
  body?: string;
  status?: string;
  thumbnail?: string;
  createdAt?: Date;
}

const blogSchema = new Schema<BlogType>({
  _id: {
    type: ObjectId,
    require: true,
  },
  title: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 100,
    trim: true,
  },
  body: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  thumbnail: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoos.model("Blog", blogSchema);

