/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('users').insert([
    {username:'Marcy-Ann',password:'1234',email:'',first_name: 'Ann', last_name: 'Duong',phonenumber:'',bio:''},
    {username:'Marcy-maya',password:'5678',email:'',first_name: 'Maya', last_name: 'Bhattacharjee',phonenumber:'',bio:''},
    // {username:'Marcy-reuben',password:'9876',email:'',first_name: 'Reuben', last_name: 'Ogbonna',phonenumber:'',bio:''},
    // {username:'Marcy-Erwin',password:'1212',email:'',first_name: 'Erwin', last_name: 'Saget',phonenumber:'',bio:''},
    // {username:'Marcy-Motun',password:'2121',email:'',first_name: 'Motun', last_name: 'Bolumole',phonenumber:'',bio:''},
    // {username:'Marcy-Laura',password:'1313',email:'',first_name: 'Laura', last_name: 'Rouse',phonenumber:'',bio:''}
  ]);
};
