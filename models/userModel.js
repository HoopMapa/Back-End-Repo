const pool = require('../db')

class Users {
    static async getAllUsersFromDB() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSingleUserFromDB(id) {
        const sql = `SELECT * FROM users WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [id]);
        return dbResult.rows;
    }
    
    static async createUserFromDB({ username, password, phonenumber, email, firstName, lastName}) {
        const sql = `INSERT INTO users (username, password, phonenumber, email, firstName, lastName )  VALUES ($1,$2,$3,$4,$5,$6)` 
        const dbResult = await pool.query(sql)
        return dbResult.Users;
    }
   

}

module.exports = Users

module.exports = Users