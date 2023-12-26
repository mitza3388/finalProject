import { Router } from "express";
import { getTripByGuideId, getTripsByTripId } from "../controllers/trip.controller";
import { auth, authNoPermistion } from "../middlewares/auth";
const router = Router();



// crud => 

router.get("/getTripByGuideId/:id", getTripByGuideId);
router.get("/getTripsByTripId/:id", getTripsByTripId);




export default router;

