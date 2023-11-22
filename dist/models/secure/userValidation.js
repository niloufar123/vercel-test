"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.YupSchema = (0, yup_1.object)().shape({
    fullname: (0, yup_1.string)().required().trim(),
    email: (0, yup_1.string)().required(),
    password: (0, yup_1.string)().required().min(4, "It should be 4 character").max(255, "It shouldn't be more than 255 character"),
    createdAt: (0, yup_1.date)().default(() => new Date()),
});
//# sourceMappingURL=userValidation.js.map