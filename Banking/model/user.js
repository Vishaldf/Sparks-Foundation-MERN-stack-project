import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    currentbal: {
      required: true,
      type: Number,
    },
  });
  
  export const User = mongoose.model("User", schema);


  