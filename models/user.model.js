import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    unique: true,
    minLength: [8, "Username must be at least 8 characters long"],
    maxLength: [50, "Username cannot exceed 50 characters"],
    index: true // Index the username field for faster search query
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;