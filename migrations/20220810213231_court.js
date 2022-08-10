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
        table.integer('user_id').references('id').inTable('users');
        table.string('basketball_court')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('courts')
};
