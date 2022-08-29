/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('courts').insert([
    {court_name: 'Gersh Park',court_level: "Beginner",court_location: "Brooklyn,NY"},
    {court_name: 'Ruckers Park',court_level: "Intermediate",court_location: "NewYork,NY"},
    {court_name: 'Baldwin Park',court_level: "Elite",court_location: "Queens,NY"},
    {court_name: 'Westh 4th park',court_level: "Elite",court_location: "NewYork,NY"},
    {court_name: 'Brooklyn bridge Park',court_level: "Elite",court_location: "Brooklyn,NY"}
  ]);
};
