
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Sprint Challenge',
          project_description: 'Just keep coding, just keep coding.',
          project_completed: false
        },
        {
          id: 2,
          project_name: 'Lambda Labs',
          project_description: 'Not Ready for it',
          project_completed: false
        },
        {
          id: 3,
          project_name: 'Virtual Farmer',
          project_description: 'I guess he plays farm games',
          project_completed: true
        }
      ]);
    });
};
