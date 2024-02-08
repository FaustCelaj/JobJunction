const mongoose = require('mongoose');

const { Schema } = mongoose;
const jobPosting = require("./jobPosting");
const Company = require("./Company");

const applicationSchema = new Schema({
  job: [jobPosting.Schema],

  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
