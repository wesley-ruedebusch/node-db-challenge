
exports.seed = function(knex) {
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, context: 'Home'},
        { id: 2, context: 'Away'},
        { id: 3, context: 'In meeting'}
      ]);
    });
};
