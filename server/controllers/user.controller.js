const bcrypt = require("bcryptjs");
const Joi = require("joi");
const { User } = require("../models/User.model");
const { generateToken } = require("../utils/jwt");

const userJoiSchema = {
    login: Joi.object().keys({
        password: Joi.string(),
        email: Joi.string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')),
    }),
    register: Joi.object().keys({
        password: Joi.string().max(20).required(),
        email: Joi.string().email({ tlds: { allow: ['com'] } }).error(() => Error('Email is not valid')).required(),
    })
};

exports.register = async (req, res, next) => {
    const body = req.body;
    try {
        //Todo: validate the body
        // check if exists
        const user = await checkIfUserExists(body.email);
        if (user) {
            throw new Error("Already in the sysytem");
        };

        //* encrypt the password
        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;

        // add to database
        const newUser = new User(body);
        //* somethings to do
        await newUser.save();

        //* response to the client
        return res.status(201).send("succed register");
    } catch (error) {
        next(error);
    }
};

const checkIfUserExists = async (email) => {
    const user = await User.findOne({ email });
    if (user) return user;
    return false;
}

exports.login = async (req, res, next) => {
    const body = req.body;
    console.log(req.body);
    try {
        const validate = userJoiSchema.login.validate(body);
        if (validate.error) {
            throw Error(validate.error);
        }

        //check is user exists
        const user = await checkIfUserExists(body.email);
        // if exsits check if password match
        if (!user || ! await bcrypt.compare(body.password, user.password)) {
            throw new Error('Password or email not valid');
        }

        else {
            //* generate jwt token
            const token = generateToken(user);
            res.send(token);
        }
    } catch (error) {
        next(error);
    }

};




