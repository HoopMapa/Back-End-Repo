/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('courts').insert([
    {id: 1,court_name: 'Gersh Park',court_level: "Beginner",court_location: "Brooklyn,NY"},
    {id: 2,court_name: 'Ruckers Park',court_level: "Intermediate",court_location: "NewYork,NY"},
    {id: 3,court_name: 'Baldwin Park',court_level: "Elite",court_location: "Queens,NY"}
  ]);
};
