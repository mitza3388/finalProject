import { Router } from "express";
import { object, string } from "joi";
import { register, login } from "../controllers/user.controller";

const router = Router();
const userJoiSchema = {
    login: object().keys({
        password: string(),
        email: string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')),
    }),
    register: object().keys({
        password: string().max(20).required(),
        email: string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')).required(),
        name: string().required(),
    })
};

router.post("/register", (req, res, next) => {
    try {
        const validate = userJoiSchema.register.validate(req.body);
        if (validate.error) {
            throw Error(validate.error);
        }
        next();
    } catch (error) {
        next(error)
    }
}, register);

router.post("/login", login);
router.delete("/delete/:userId", deleteUser);
router.put("/update/:userId", validateUser, updateUser);

export default router;