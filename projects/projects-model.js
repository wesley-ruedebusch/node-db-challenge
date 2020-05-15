const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  addProjects,
  getProjectTasks,
};

function getProjects() {
  return db("projects");
}

function addProjects(project) {
  return db("projects")
    .insert(project, "id")
    .then((ids) => {
      console.log(ids);
      return ids;
    });
}

function getProjectTasks(projectID) {
  return db("tasks")
    .where("project_id", projectID)
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task_desription",
      "tasks.task_notes",
      "tasks.completed"
    );
}
