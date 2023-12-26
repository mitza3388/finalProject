const express = require("express");
const { getTripByGuideId, getTripsByTripId, editTrip, getParticipantsByTripId, getRouteByTripId, getEquipmentListByTripId} = require("../controllers/trip.controller");
const { auth, authNoPermistion } = require("../middlewares/auth");
const router = express.Router();



// crud => 

router.get("/getTripByGuideId/:id", getTripByGuideId);
router.get("/getTripsByTripId/:id", getTripsByTripId);
router.get('/getParticipantsByTripId/:id', getParticipantsByTripId);
router.get('/getRouteByTripId/:id', getRouteByTripId);
router.get('/getEquipmentListByTripId/:id', getEquipmentListByTripId);
router.put("/editTrip/:id",auth(),editTrip);



module.exports = router;






