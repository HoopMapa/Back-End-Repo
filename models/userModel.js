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

    static async getSingleUserFromDBEmail(email, password) {
        const sql = `SELECT * FROM users WHERE email = ($1) and password = ($2)`;
        const dbResult = await pool.query(sql, [email, password]);
        return dbResult.rows;
    }
    
    static async createUserFromDB({ username, password, email, firstName, lastName, phonenumber}) {
        const sql = `INSERT INTO users (username, password, email, firstname, lastname, phonenumber) VALUES ($1, $2, $3, $4, $5, $6) returning *` 
        const dbResult = await pool.query(sql, [username, password, email, firstName, lastName, phonenumber])
        return dbResult.rows;
    }

    static async deleteUserFromDB(user_id) {
        await pool.query(`DELETE FROM posts WHERE user_id = ($1) RETURNING *`, [user_id]);
        await pool.query(`DELETE FROM users WHERE id = ($1) RETURNING *`, [user_id]);
    }

    static async updateUserFromDB({id, username, password, email, firstname, lastname, phonenumber, bio}) {
        const sql = `UPDATE users
        SET username = ($2),
        password = ($3),
        email = ($4),
        firstname = ($5),
        lastname = ($6),
        phonenumber = ($7),
        bio = ($8)
        WHERE id = ($1)
        `
        const dbResult = await pool.query(sql, [id, username, password, email, firstname, lastname, phonenumber, bio])
        return dbResult.rows;
    }

}

module.exports = Users

