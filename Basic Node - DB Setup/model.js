const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema(
  {
    name: String,
    class: String,
    Roll_no: Number,
    isPresent: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: ["male", "gemale"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Model", ModelSchema);
