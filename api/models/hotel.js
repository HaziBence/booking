import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  type: {
    type: String,
    requried: true,
  },
  city: {
    type: String,
    requried: true,
  },
  address: {
    type: String,
    requried: true,
  },
  distance: {
    type: String,
    requried: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    requried: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    requried: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Hotel', HotelSchema);