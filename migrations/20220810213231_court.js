/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('courts', (table) => {
        table.increments('id').primary();
        table.string('court_name')
        table.string('court_level')
        table.string('court_location')
        table.string("longitude")
        table.string("latitude")
        table.integer('user_id').references('id').inTable('users');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('courts')
};
