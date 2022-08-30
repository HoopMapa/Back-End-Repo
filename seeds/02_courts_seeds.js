/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('courts').insert([
    {court_name: 'Captain William Harry Thompson Playground',court_level: "Beginner",court_location: "E 174 St. & Bronx River Ave.",longitude:"-73.8775",latitude:"40.8342"},
    {court_name: '52 Playground',court_level: "Intermediate",court_location: "Kelly St. & Ave. St. John",longitude:"-73.9021",latitude:"40.8149"},
    {court_name: 'Abigail Adams Playground',court_level: "Elite",court_location: "Tinton Ave. & E 156 St.",longitude:"-73.9044",latitude:"40.8172"},
    {court_name: 'Agnes Haywood Playground',court_level: "Elite",court_location: "Barnes Ave. & E 215 St.",longitude:"-73.8619",latitude:"40.8804"},
    {court_name: 'Allerton Playground',court_level: "Intermediate",court_location: "Bouck & Throop Aves.",longitude:"-73.8503",latitude:"40.8659"},
    {court_name: 'Angelo Campanero Playground',court_level: "Elite",court_location: "Gun Hill Rd., Eastchester Rd. and O'Neill Pl.",longitude:"-73.843",latitude:"40.8679"},
    {court_name: 'Aqueduct Lands Playground',court_level: "Elite",court_location: "W 183 St., Aqueduct Ave., W Tremont Ave. and University Ave.",longitude:"-73.9035",latitude:"40.8634"},
    {court_name: 'Arcilla Playground',court_level: "Elite",court_location: "E 164 St. & Teller Ave.",longitude:"-73.9145",latitude:"40.8271"},
    {court_name: 'Bailey Playground',court_level: "Elite",court_location: "Bailey Ave. & W 234-W 238 Sts.",longitude:"-73.9008",latitude:"40.8811"},
    {court_name: 'Behagen Playground',court_level: "Beginner",court_location: "E 166 St., Union Ave. and Tinton Ave.",longitude:"-73.9015",latitude:"40.8254"}
  ]);
};
