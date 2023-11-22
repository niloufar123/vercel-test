import { object, string, number, date, InferType } from 'yup';

exports.YupSchema = object().shape({
    fullname: string().required().trim(),
  email: string().required(),
  password: string().required().min(4,"It should be 4 character").max(255,"It shouldn't be more than 255 character"),
  createdAt:  date().default(() => new Date()),
});


