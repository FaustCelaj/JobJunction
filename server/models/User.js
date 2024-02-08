const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Company = require("./Company");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  role: {
    type: String,
    enum: ["jobseeker", "company"],
    required: true,
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  resumeURL: {
    type: String,
    required: false,
  },

  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: false,
  },
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
