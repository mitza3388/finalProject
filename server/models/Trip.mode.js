const mongoose = require('mongoose');

// Define the main trip schema
const tripSchema = new mongoose.Schema({
  tripId: Number,
  tripName: String,
  guideId: String,
  travelersList: [
    {
      userId: Number,
      username: String
    }
  ],
  route: [
    {
      location: String,
      landmarkName: String,
      description: String,
      startTime: String,
      length: String,
      nextLandmarkId: Number
    }
  ],
  equipmentList: [
    {
      userName: String,
      productName: String,
      productId: Number
    }
  ]
});

// Create the model for the Trip collection
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;