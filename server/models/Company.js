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
      "Accommodation and Food Services",
      "Administration, Business Support & Waste Management Services",
      "Finance and Insurance",
      "Construction",
      "Information Technology",
      "Arts, Entertainment and Recreation",
      "Healthcare and Social Assistance",
      "Educational Services",
      "Real Estate and Rental and Leasing",
      "Agriculture, Forestry, Fishing and Hunting",
      "Utilities",
      "Professional, Scientific and Technical Services",
      "Wholesale Trade",
      "Transportation and Warehousing",
      "Other Services (except Public Administration)",
      "Retail Trade",
      "Manufacturing",
    ],
    required: true,
  },
  companySize: {
    type: String,
    enum: ["Less than 10", "10 - 20", "20 - 30", "30 - 50", "50 - 100", "100+"],
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
