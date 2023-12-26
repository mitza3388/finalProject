const mongoose = require('mongoose');

// Define the main trip schema
const tripSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: false
  },
  tripName: {
    type: String,
    required: [true, 'name is requred'],
  },
  guideId: {
    type: String,
    required: false
  },
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
module.exports.Trip = Trip;