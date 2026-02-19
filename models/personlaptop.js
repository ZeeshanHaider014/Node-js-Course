const mongoose = require('mongoose');

//Define the personschema
const personlaptopSchema = new mongoose.Schema({
      name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: 0
  },
  laptopBrand: {
    type: String,
    required: true
  },
  laptopModel: {
    type: String
  },
  ram: {
    type: Number, // in GB
    default: 8
  },
  storage: {
    type: String // e.g., 256GB SSD
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const personlaptop = mongoose.model("personlaptop", personlaptopSchema);
module.exports = personlaptop;