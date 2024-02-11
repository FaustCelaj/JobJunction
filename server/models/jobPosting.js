const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobPostingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    enum: ["In Office", "Hybrid", "Remote"],
    required: true,
  },
  jobFunctions: {
    type: String,
    enum: [
      "Administrative",
      "Arts & Design",
      "Business",
      "Customer Services & Support",
      "Education",
      "Engineering",
      "Finance & Accounting",
      "Healthcare",
      "Human Resources",
      "Information Technology",
      "Marketing",
      "Military & Protective Services",
      "Operations",
      "Other",
      "Product & Project Management",
      "Research & Science",
      "Retail & Food Services",
      "Sales",
      "Skilled Labor & Manufacturing",
      "Transportation",
    ],
  },
  salary: {
    type: String,
    enum: [
      "40,000 - 60,000",
      "60,000 - 80,000",
      "80,000 - 100,000",
      "100,000 - 150,000",
      "150,000+",
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    required: true,
  },

  // will reference the company
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

const jobPosting = mongoose.model("jobPosting", jobPostingSchema);

module.exports = jobPosting;
