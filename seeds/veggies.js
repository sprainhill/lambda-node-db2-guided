
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies').del()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {id: 1, veggie_name: 'broccoli', like_it: true},
        {id: 2, veggie_name: 'carrots', like_it: false},
        {id: 3, veggie_name: 'fubar', like_it: true},
      ]);
    });
};
