// const { Pool } = require('pg')
// const pool = new Pool({
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD
// })

// module.exports = pool

//Starter Code from Itzel
require('dotenv').config()
const { Pool } = require('pg')

const connectionLocal = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
}

const connectionProduction = {
  connectionString: process.env.DATABASE_URL, 
  ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal)

const query = (queryText, queryParams) => {
  return pool.query(queryText, queryParams) 
}

module.exports = {query}