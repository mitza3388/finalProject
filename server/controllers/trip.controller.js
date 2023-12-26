const { Trip } = require("../models/Trip.model");

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {import("express").NextFunction} next 
 * @returns {Response}
 */


exports.getTripByTripId = async (req, res, next) => {
    try {
        console.log("55555555555555555555555");
        const { id } = req.params;
        console.log(id);
        const trip = await Trip.findOne({ _id : id}).select("-__v");
        console.log(trip.tripName);
        res.send(trip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);    
    }
}




exports.getTripsByGuideId = async (req, res, next) => {
    try {
        const  guideId = res.locals.userId;
        const trip = await Trip.find({ guideId }).select("-__v");
        res.send(trip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}


exports.addNewTrip = async (req, res, next) => {
    const body = req.body;
    const userId = res.locals.userId;
    try {
        const newTrip = new Trip(body);
        newTrip.guideId = userId;
        newTrip.id = newTrip._id;
        await newTrip.save();
        res.status(201).send(newTrip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
