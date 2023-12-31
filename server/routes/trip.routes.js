const express = require("express");
const { addNewTrip,getTripsByGuideId, getTripByTripId, editTrip, getParticipantsByTripId, getRouteByTripId, getEquipmentListByTripId, addNewLandmark} = require("../controllers/trip.controller");
const { auth, authNoPermistion } = require("../middlewares/auth");
const router = express.Router();



// crud => 

router.get('/getParticipantsByTripId/:id',auth(), getParticipantsByTripId);
router.get('/getRouteByTripId/:id',auth(), getRouteByTripId);
router.get('/getEquipmentListByTripId/:id',auth(), getEquipmentListByTripId);
router.put("/editTrip/:id",auth(),editTrip);
router.get("/getTripByTripId/:id",auth(), getTripByTripId);
router.get("/getTripsByGuideId",auth(), getTripsByGuideId);
router.post("/addNewTrip",auth(), addNewTrip);
router.put("/addNewLandmark/:id",auth(), addNewLandmark);




module.exports = router;






