// const models = require('../models');
// const db = require('../config/connection');

// module.exports = async (modelName, collectionName) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }

// cleanDB.js

const mongoose = require("mongoose");

async function cleanDB(modelName) {
  const model = mongoose.model(modelName);
  try {
    await model.deleteMany({});
    console.log(`${modelName} collection cleared.`);
  } catch (err) {
    throw new Error(`Error clearing ${modelName} collection: ${err}`);
  }
}

module.exports = cleanDB;
