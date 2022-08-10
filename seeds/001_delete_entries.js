/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('courts').del()
  await knex('posts').del()
  await knex('users').del()
};
