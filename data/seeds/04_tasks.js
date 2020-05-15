
exports.seed = function (knex) {
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: 'create tables',
          task_notes: 'finished',
          task_completed: true
        },
        {
          id: 2,
          project_id: 1,
          task_description: 'finish seeding',
          task_notes: 'working on it',
          task_completed: false
        },
        {
          id: 3,
          project_id: 2,
          task_description: 'Take a break',
          task_notes: 'Only 10 mins',
          task_completed: false
        },
        {
          id: 4,
          project_id: 3,
          task_description: 'take the dog out',
          task_notes: 'restarts every 4 hours',
          task_completed: false
        },
        {
          id: 5,
          project_id: 3,
          task_description: 'I need to drink more coffee',
          task_notes: '',
          task_completed: true
        },
      ]);
    });
};
