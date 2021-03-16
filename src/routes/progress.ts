import * as Express from "express";
import { Task } from "../models/task-model";

const router = Express.Router();

router.route("/").get((req, res) => {
  Task.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  const newTask = new Task({
    title: title,
    completed: completed,
  });

  newTask
    .save()
    .then(() => res.json("task added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("task deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task: any) => {
      task.title = req.body.title;

      task
        .save()
        .then(() => res.json("task updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/complete/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task: any) => {
      task.completed = req.body.completed;

      task
        .save()
        .then(() => res.json("task updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

export = router;
