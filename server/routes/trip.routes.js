const express = require("express");
const { addNewTrip,getTripsByGuideId, getTripByTripId, editTrip, getParticipantsByTripId, getRouteByTripId, getEquipmentListByTripId} = require("../controllers/trip.controller");
const { auth, authNoPermistion } = require("../middlewares/auth");
const router = express.Router();



// crud => 

router.get('/getParticipantsByTripId/:id', getParticipantsByTripId);
router.get('/getRouteByTripId/:id', getRouteByTripId);
router.get('/getEquipmentListByTripId/:id', getEquipmentListByTripId);
router.put("/editTrip/:id",auth(),editTrip);
router.get("/getTripByTripId/:id",auth(), getTripByTripId);
router.get("/getTripsByGuideId",auth(), getTripsByGuideId);
router.post("/addNewTrip",auth(), addNewTrip);




module.exports = router;






