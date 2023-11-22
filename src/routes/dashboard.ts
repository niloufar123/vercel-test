

const adminController=require("../controller/adminController")

//  @desc   Dashboard Handle Post Creation

import { Router } from "express";

const router = Router();

//  @route  POST /dashboard/add-post
router.post("/add-post",adminController.createNewBlog)
