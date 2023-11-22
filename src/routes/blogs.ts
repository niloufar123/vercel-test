import {  Router } from "express";
const blogController=require("../controller/blogController")
const router = Router();

router.get("/",blogController.getIndex);
router.get("/sessions",blogController.getIndex);



router.get("/blog/:id", blogController.getSingleBlog);




export default router;
