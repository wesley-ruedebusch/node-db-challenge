const express = require("express");

const Tasks = require("./task-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get the tasks." });
    });
});

router.post("/", (req, res) => {
  const task = req.body;
  Tasks.addTask(task)
    .then((newTask) => {
      res.status(201).json({ created: newTask });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
