import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import toast, { Toaster } from "react-hot-toast";

//user registration
export const register = async (req, res) => {
  try {
    // if (!req.body.username || req.body.username.trim() === "") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Username is required and cannot be empty.",
    //   });
    // }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Registration successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register. Please try again.",
    });
  }
};

// ========================================================================================

//user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    //if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    //if user exist then check password
    const checkCorrectPasword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //if password is incorrect
    if (!checkCorrectPasword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;
    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );
    console.log(token);
    //set token in the browsser cookiess and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: {
          ...rest,
        },
        role,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
    });
  }
};
