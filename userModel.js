const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    fullName: String,
    phone: String,
    dateOfBirth: String, // Consider using Date type for proper date handling
    gender: String,
    createdAt: { type: Date, default: Date.now },
  },
  { strict: false } // Allows additional fields not defined in the schema
);

const User = mongoose.model("users", userSchema);

module.exports = User;
