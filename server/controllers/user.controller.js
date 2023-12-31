const bcrypt = require("bcryptjs");
const Joi = require("joi");
const { User } = require("../models/User.model");
const { generateToken } = require("../utils/jwt");
const { Trip } = require("../controllers/trip.controller")

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

        //* generate token
        
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

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
  
    try {
      // Find user by userId and delete
      const deleteUser = await User.findByIdAndDelete(userId);
  
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully', deleteUser });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  };
  
  // updateUser function
  exports.updateUser = async (req, res) => {
    const { userId } = req.params;
    const updatedData = req.body;
  
    try {
      // Find user by userId and update with the provided data
      const updateUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
  
      if (!updateUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User updated successfully', updateUser });
    } catch (error) {
      return res.status(500).json({ message: 'Error updating user', error: error.message });
    }
  };
  
  exports.getMyTrips = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'משתמש לא נמצא' });
      }
  
      const userTrips = user.myTrips || []; // ברירת מחדל למערך ריק אם myTrips הוא undefined
      const tripIds = userTrips.map(trip => trip.tripId);
  
      if (tripIds.length === 0) {
        return res.status(200).json({ userTrips: [] }); // אין נסיעות, יש להחזיר מערך ריק או להוסיף הודעה מתאימה
      }
  
      const trips = await Trip.find({ _id: { $in: tripIds } });
  
      return res.status(200).json({ userTrips: trips });
    } catch (error) {
      console.error('שגיאה באחזור נסיעות המשתמש:', error);
      return res.status(500).json({ message: 'שגיאה באחזור נסיעות המשתמש', error: error.message });
    }
  };
  
  






