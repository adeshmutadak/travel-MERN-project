import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try Again",
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: " Update Successfully ",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Update",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Tour Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to Delete Tour",
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const getTour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "User Found Successfully",
      data: getTour,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found ",
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  //   console.log(page);
  try {
    const getAll = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: getAll.length,
      message: "Get All Users Success Fully",
      data: getAll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while get All Users",
    });
  }
};

//get tour by serach
export const getTourBySerach = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); //here i means case Sensitive
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    //gte meaning greate than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not Found",
    });
  }
};

//get feature tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not Found",
    });
  }
};

//get Tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed To fetch" });
  }
};
