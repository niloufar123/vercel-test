"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController = require("../controller/blogController");
const router = (0, express_1.Router)();
router.get("/", blogController.getIndex);
router.get("/sessions", blogController.getIndex);
router.get("/blog/:id", blogController.getSingleBlog);
exports.default = router;
//# sourceMappingURL=blogs.js.map