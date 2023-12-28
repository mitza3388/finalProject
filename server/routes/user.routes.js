const express = require("express");
const Joi = require("joi");
const { register, login, updateUser, deleteUser } = require("../controllers/user.controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();
const userJoiSchema = {
    login: Joi.object().keys({
        password: Joi.string(),
        email: Joi.string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')),
    }),
    register: Joi.object().keys({
        password: Joi.string().max(20).required(),
        email: Joi.string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')).required(),
        name: Joi.string().required(),
    }),
    deleteUser: Joi.object().keys({
        id: Joi.string().required(),
    }),

    updateUser: Joi.object().keys({
        userId: Joi.string().required(),
        // Add other fields that can be updated
        // Example: name: Joi.string(),
        //         email: Joi.string().email({ tlds: { allow: ['com'] } }),
    }),
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
router.delete("/delete/:userId", auth(), deleteUser);
router.patch("/update/:userId", auth(), updateUser);

module.exports = router;