"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminController = require("../controller/adminController");
//  @desc   Dashboard Handle Post Creation
const express_1 = require("express");
const router = (0, express_1.Router)();
//  @route  POST /dashboard/add-post
router.post("/add-post", adminController.createNewBlog);
//# sourceMappingURL=dashboard.js.map