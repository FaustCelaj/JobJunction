const mongoose = require('mongoose');

const { Schema } = mongoose;
const Company = require("./Company");

const jobPostingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    enum: ["40,000 - 60,000", "60,000 - 80,000", "80,000 - 100,000", "100,000 - 150,000", "150,000+"],
    required: true
  },
  locationType: {
    type: String,
    enum: ["In Office", "Hybrid", "Remote"],
  },
  title: {
    type: String,
    required: true
  },

  company: [Company.Schema],
});

const jobPosting = mongoose.model('jobPosting', jobPostingSchema);

module.exports = jobPosting;
