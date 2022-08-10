/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('users').insert([
    {username:'Marcy-Ann',password:'1234',email:'',firstname: 'Ann', lastname: 'Duong',phonenumber:'',bio:''},
    {username:'Marcy-maya',password:'5678',email:'',firstname: 'Maya', lastname: 'Bhattacharjee',phonenumber:'',bio:''},
    // {username:'Marcy-reuben',password:'9876',email:'',firstname: 'Reuben', lastname: 'Ogbonna',phonenumber:'',bio:''},
    // {username:'Marcy-Erwin',password:'1212',email:'',firstname: 'Erwin', lastname: 'Saget',phonenumber:'',bio:''},
    // {username:'Marcy-Motun',password:'2121',email:'',firstname: 'Motun', lastname: 'Bolumole',phonenumber:'',bio:''},
    // {username:'Marcy-Laura',password:'1313',email:'',firstname: 'Laura', lastname: 'Rouse',phonenumber:'',bio:''}
  ]);
};
