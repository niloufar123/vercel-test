import { Router } from "express";

const router= Router();
const userController=require("../controller/userController")

//  @route  POST /user/registerUser
router.post("/register",userController.createUser)


//  @desc   Login Handle
//  @route  POST /user/login
router.post("/login", userController.handleLogin);

export default router;