const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const taskRoleSchema = new Schema(
  {
    tasktitle: {
      type: String,
      required: [true, "must provide a task title"],
      trim: true,
    },

    Description: {
      type: String,
      required: [true, "must provide a Description"],
    },

    tags: {
      type: String,
      enum: ["urgent", "important"],
      required: [true, "select a tag"],
    },

    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const TASKROLE = mongoose.model("task", taskRoleSchema);
module.exports = TASKROLE;
