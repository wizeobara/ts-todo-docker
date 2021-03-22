import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema(
  {
    completed: { type: Boolean, required: true },
    title: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

taskSchema.add({ child: [taskSchema] });

// BELOW CODE STOPS POST CHILD FROM WORKING
// export const taskSchema = new mongoose.Schema();
// taskSchema.add({
//   completed: { type: Boolean, required: true },
//   title: { type: String, required: true },
//   user: { type: String, required: true },
// });

export const Task = mongoose.model("Task", taskSchema);
