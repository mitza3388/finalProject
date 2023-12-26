const express = require("express");
const { getTripsByGuideId, getTripByTripId, addNewTrip, editTrip} = require("../controllers/trip.controller");
const { auth, authNoPermistion } = require("../middlewares/auth");
const router = express.Router();



// crud => 


router.get("/getTripByTripId/:id",auth(), getTripByTripId);
router.get("/getTripsByGuideId",auth(), getTripsByGuideId);

router.post("/addNewTrip",auth(), addNewTrip);




module.exports = router;

