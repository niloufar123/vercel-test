"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require("../controller/userController");
//  @route  POST /user/registerUser
router.post("/register", userController.createUser);
//  @desc   Login Handle
//  @route  POST /user/login
router.post("/login", userController.handleLogin);
exports.default = router;
//# sourceMappingURL=users.js.map