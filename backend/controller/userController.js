import User from "../models/User.js";

//create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try Again",
    });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: " Update Successfully ",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Update",
    });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to Delete User",
    });
  }
};

//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const getUser = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "User Found Successfully",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found ",
    });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const getAll = await User.find({});

    res.status(200).json({
      success: true,

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
