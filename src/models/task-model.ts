import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", taskSchema);
