exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project-resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project-resources').insert([
        {
          id: 1,
          project_id: 1,
          resource_id: 1
        },
        {
          id: 2,
          project_id: 1,
          resource_id: 2
        },
        {
          id: 3,
          project_id: 2,
          resource_id: 3
        },
        {
          id: 4,
          project_id: 2,
          resource_id: 1
        },
        {
          id: 5,
          project_id: 2,
          resource_id: 2
        },
        {
          id: 6,
          project_id: 3,
          resource_id: 4
        },
        {
          id: 7,
          project_id: 3,
          resource_id: 5
        },


      ]);
    });
};