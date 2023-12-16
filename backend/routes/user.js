import express from "express";
const router = express.Router();
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controller/userController.js";

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
//update new user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

//get Single user
router.get("/:id", verifyUser, getSingleUser);

//getAll user
router.get("/", verifyAdmin, getAllUser);

export default router;
