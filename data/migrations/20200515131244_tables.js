exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();
      tbl.string("project_description", 255);
      tbl.boolean("project_completed").defaultTo(false).notNullable();
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 255).unique().notNullable();
      tbl.string("resource_description", 255);
    })
    .createTable("contexts", (tbl) => {
      tbl.increments();
      tbl.string("context", 255).notNullable();
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("task_description", 255).notNullable();
      tbl.string("task_notes", 255);
      tbl.boolean("task_completed").defaultTo(false).notNullable();
    })
    .createTable("project_resources", (tbl) => {
        tbl.increments();
        // tbl.primary(['project_id', 'resource_id']);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("task_context", (tbl) => {
        tbl.increments();
        // tbl.primary(['task_id', 'context_id']);
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("context_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("task_context")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("contexts")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
