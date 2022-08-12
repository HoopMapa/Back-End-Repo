/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posts').insert([
    { post_body: 'Ballin at Ruckers pull Up!!!', user_id: 1},
    { post_body: 'Tournament at gersh is litt right now', user_id: 2},
    { post_body: 'its friday im trying to get a quick pick up who want this work!', user_id: 3},
    { post_body: 'kevin durant just dropped 40 points at west 4th', user_id: 4},
    { post_body: 'sneaker giveaway at Brooklyn bridge park', user_id: 5},
  ]);
};
