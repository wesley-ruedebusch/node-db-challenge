const express = require('express');

const ResourceRouter = require('../resources/resource-router');
const ProjectRouter = require('../projects/projects-router');
const TaskRouter = require('../tasks/task-router');

const server = express();

server.use(express.json());
server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;