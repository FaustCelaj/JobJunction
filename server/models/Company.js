const mongoose = require("mongoose");

const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    // trim: true
  },
  description: {
    type: String,
  },
  industry: {
    type: String,
    enum: [
      "Construction, Repair & Maintenance Services",
      "Education",
      "Government & Public Administration",
      "Healthcare",
      "Hotel & Travel Accommodation",
      "Human Resources & Staffing",
      "Information Technology",
      "Management & Consulting",
      "Manufacturing",
      "Non-profit & NGO",
      "Pharmaceutical & Biotechnology",
      "Real Estate",
      "Restaurants & Food Service",
      "Retail & Wholesale",
    ],
    required: true,
  },
  companySize: {
    type: String,
    enum: [
      "1-200 employees",
      "201-500 employees",
      "501-1000 employees",
      "1001-3000 employees",
      "3001+ employees",
    ],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
  },

  // will reference the user who created this company
  accountOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // will show all the job Postings
  // activeJobs: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "jobPosting",
  //     required: true,
  //   },
  // ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
