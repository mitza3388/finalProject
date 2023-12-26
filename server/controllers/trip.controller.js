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
        const { id } = req.params;
        console.log(id);
        const trip = await Trip.findOne({ id }).select("-__v");
        res.send(trip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}




exports.getTripsByGuideId = async (req, res, next) => {
    try {
        const { guideId } = req.params;
        console.log(guideId);
        const trip = await Trip.find({ guideId: req.params.id }, req.body).select("-__v");
        res.send(trip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}