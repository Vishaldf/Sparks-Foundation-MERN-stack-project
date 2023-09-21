import { User } from "../model/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { name, email, currentbal } = req.body;

  // Declare the user variable using 'let'
  let user;

  try {
    // Create a new user document
    user = await User.create({ name, email, currentbal });

    res.status(201).json({
      success: true,
      message: "New user created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const allusers= async (req,res)=>{
    try{const users = await User.find({});
    res.json({
        success:true,
        users,
    });
  } catch(error){
    console.error(error);
    res.status(500).json({
      success:false,
      message:"internal server error",
    });
  }
} 

export const singleuser = async (req, res) => {
  const { userName } = req.params; // Use req.params to access URL parameters

  try {
    const user = await User.findOne({ name: userName }); // Find user by name
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
