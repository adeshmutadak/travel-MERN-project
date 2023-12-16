import express from "express";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controller/bookingController.js";
const router = express.Router();

router.post("/", createBooking); //we remove verify user due to error later on we can add
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
export default router;
