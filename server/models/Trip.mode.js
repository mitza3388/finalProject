

const mongoose = require('mongoose');

// Define the schema for landmarks in the route
const landmarkSchema = new mongoose.Schema({
  location: String,
  landmarkName: String,
  description: String,
  startTime: String,
  length: String,
  nextLandmarkId: Number
});

// Define the schema for equipment
const equipmentSchema = new mongoose.Schema({
  userName: String,
  productName: String,
  productId: Number
});

// Define the main trip schema
const tripSchema = new mongoose.Schema({
  tripId: Number,
  tripName: String,
  guideId: String,
  travelersList: [{
    userId: Number,
    username: String
  }],
  route: [landmarkSchema],
  equipmentList: [equipmentSchema]
});

// Create the model for the Trip collection
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
