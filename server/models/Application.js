const mongoose = require("mongoose");

const { Schema } = mongoose;

const applicationSchema = new Schema({
  job: {
    type: Schema.Types.ObjectId,
    ref: "jobPosting",
    required: true,
  },
  applicant: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Applied", "Reviewed", "Rejected", "Accepted"],
    required: true,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
