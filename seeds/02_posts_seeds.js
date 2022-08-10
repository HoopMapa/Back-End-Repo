/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posts').insert([
    { post_body: 'hi im zuko', user_id: 1},
    { post_body: 'hi im apapa', user_id: 2},
    { post_body: 'its friday', user_id: 3},
    { post_body: 'fhfhh', user_id: 4},
    { post_body: 'fghhg', user_id: 5},
  ]);
};
