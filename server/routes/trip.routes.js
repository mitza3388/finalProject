const express = require("express");
const { getTripByGuideId, getTripByTripId} = require("../controllers/trip.controller");
const { auth, authNoPermistion } = require("../middlewares/auth");
const router = express.Router();



// crud => 

router.get("/getTripByGuideId/:id", getTripByGuideId);
router.get("/getTripsByTripId/:id", getTripsByTripId);




module.exports = router;

