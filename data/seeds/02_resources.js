
exports.seed = function (knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'computer', resource_description: 'My baby cause I built it' },
        { id: 2, resource_name: 'standing desk', resource_description: 'nees more cable management' },
        { id: 3, resource_name: 'db-designer', resource_description: 'used to visualize data models' },
        { id: 4, resource_name: 'dogs', resource_description: 'fluffy beasts' },
        { id: 5, resource_name: 'pigear', resource_description: 'Zoeys favorite' }

      ]);
    });
};
