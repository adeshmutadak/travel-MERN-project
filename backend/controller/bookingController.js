import Booking from "../models/Booking.js";

//create new Booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your Tour is Booked",
      data: savedBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      success: false,
      message: "Unable to Book Tour",
      error: error.message, // Add this line to include the error message in the response.
    });
  }
};

//get single Booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfull",
      data: book,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(404).json({
      success: false,
      message: "Not Found",
      error: error.message, // Add this line to include the error message in the response.
    });
  }
};

//get all Booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "Successfull",
      data: books,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message, // Add this line to include the error message in the response.
    });
  }
};
