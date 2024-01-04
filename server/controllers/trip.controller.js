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
        const trips = await Trip.find({ guideId }).select("-__v");
        res.send(trips);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

exports.getParticipantsByTripId = async (req, res, next) => {
    const tripId = req.params.id;

  try {
    // Find the trip by ID
    const trip = await Trip.findOne({ _id: tripId });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    // Extract participants from the travelersList array
    const participants = trip.travelersList;

    res.status(200).json({ participants });
  } catch (error) {
    console.error('Error fetching participants:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getRouteByTripId = async (req, res, next) => {
    const tripId = req.params.id;
  
    try {
      // Find the trip by ID
      const trip = await Trip.findOne({_id: tripId });
  
      if (!trip) {
        return res.status(404).json({ message: 'Trip not found' });
      }
  
      // Extract route information from the route array
      const route = trip.route;
  
      res.status(200).json({ route });
    } catch (error) {
      console.error('Error fetching route:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  

  exports.getParticipantsByTripId = async (req, res, next) => {
    const tripId = req.params.id;

  try {
    // Find the trip by ID
    const trip = await Trip.findOne({ _id: tripId });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    // Extract participants from the travelersList array
    const participants = trip.travelersList;

    res.status(200).json({ participants });
  } catch (error) {
    console.error('Error fetching participants:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.editTrip = async (req, res, next) => {
    try {
        const trip = await Trip.updateOne({ _id: req.params.id }, req.body);
        res.json(trip);
    } catch (error) {
        console.log(error);
        res.sendStatus(400).send(error);
    }
};


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


exports.addNewLandmark = async (req, res, next) => {
  const tripId = req.params.id;
  const body = req.body;
  const userId = res.locals.userId;

  try {
    // Find the trip by ID
    const trip = await Trip.findOne({ _id: tripId });

    // Create a new landmark object from the request body
    const newLandmark = {
      location: body.location,
      landmarkName: body.landmarkName,
      description: body.description,
      startTime: body.startTime,
      length: body.length,
      nextLandmarkId: body.nextLandmarkId
    };

    // Add the new landmark to the route array
    trip.route.push(newLandmark);

    // Save the updated trip to the database
    await trip.save();

    // Send the updated trip as a response
    res.json(trip);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};


exports.getEquipmentListByTripId = async (req, res, next) => {
    const tripId = req.params.id;
  
    try {
      // Find the trip by ID
      const trip = await Trip.findOne({ _id: tripId });
  
      if (!trip) {
        return res.status(404).json({ message: 'Trip not found' });
      }
  
      // Extract equipment list from the equipmentList array
      const equipmentList = trip.equipmentList;
  
      res.status(200).json({ equipmentList });
    } catch (error) {
      console.error('Error fetching equipment list:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
