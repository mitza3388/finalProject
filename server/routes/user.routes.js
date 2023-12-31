const express = require("express");
const Joi = require("joi");
const { register, login, updateUser, deleteUser, getMyTrips } = require("../controllers/user.controller");
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
    }),
    deleteUser: Joi.object().keys({
        id: Joi.string().required(),
    }),
    updateUser: Joi.object().keys({
        userId: Joi.string().required(),
    }),
    getMyTrips:Joi.object().keys({
        userId: Joi.string().required(),
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
router.get("/getMyTrips/:userId", auth(), getMyTrips);

module.exports = router;