/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => { 
    table.increments.length('id').primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.string('phonenumber').notNullable()
    table.string('bio').nullable();
  }
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
    return knex.schema.dropTable("users")
  };