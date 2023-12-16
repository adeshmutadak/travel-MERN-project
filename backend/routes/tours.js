import express from "express";
const router = express.Router();
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySerach,
  getTourCount,
  updateTour,
} from "../controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
//create new tour
router.post("/", verifyAdmin, createTour);

//update new tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//get Single Tour
router.get("/:id", getSingleTour);

//getAll tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySerach);
//get by Featured
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
export default router;
