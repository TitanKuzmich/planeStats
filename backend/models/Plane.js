const mongoose = require("mongoose");

const aviaScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Plane = mongoose.model("plane", aviaScheme);

module.exports = Plane;
