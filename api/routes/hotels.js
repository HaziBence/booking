import express from "express";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/hotel.js";

const router = express.Router();

router.post('/', createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotel);
router.get("/",  getHotels);

export default router;
