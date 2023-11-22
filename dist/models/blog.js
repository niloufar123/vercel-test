"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoos = require("mongoose");
const mongoose_1 = require("mongoose");
let ObjectId = mongoose_1.Schema.ObjectId;
const blogSchema = new mongoose_1.Schema({
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
//# sourceMappingURL=blog.js.map