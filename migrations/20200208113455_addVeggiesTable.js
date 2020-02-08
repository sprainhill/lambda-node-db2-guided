
// make changes
exports.up = function(knex) {
    // always return the call to knex.schema
    return knex.schema.createTabe('veggies', tbl => {
        // primary key - id - int - auto increments
        tbl.increments();
        tbl.string('veggie_name', 255)
        .unique()
        .notNullable()
        .index() // makes search using this column faster

        tbl.date('date')

        tbl.boolean('like_it').defaultTo(false)
    })
  
};

// revert changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies');
  
};
