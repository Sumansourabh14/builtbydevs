import mongoose, { Schema } from "mongoose";

const portfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
    },
    stack: {
      type: Array,
    },
    experience: {
      type: Number,
    },
    country: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      unique: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema); // prevent OverwriteModelError: Cannot overwrite Portfolio model once compiled.
export default Portfolio;
