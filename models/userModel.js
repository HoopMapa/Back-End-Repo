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
    
    static async createUserFromDB({ username, password, email, firstName, lastName, phonenumber}) {
        const sql = `INSERT INTO users (username, password, email, firstname, lastname, phonenumber) VALUES ($1, $2, $3, $4, $5, $6) returning *` 
        const dbResult = await pool.query(sql, [username, password, email, firstName, lastName, phonenumber])
        return dbResult.rows;
    }

    static async updateUserFromDB({ username, phonenumber, bio, user_id}) {
        const sql = `UPDATE users SET username = ($1) , phonenumber = ($2), bio = ($3) WHERE users.id = ($4) RETURNING *` 
        const dbResult = await pool.query(sql, [ username, phonenumber, bio, user_id])
        return dbResult.rows;
    }
    
    static async deleteUserFromDB(user_id) {
        await pool.query(`DELETE FROM posts WHERE user_id = ($1) RETURNING *`, [user_id]);
        await pool.query(`DELETE FROM users WHERE id = ($1) RETURNING *`, [user_id]);
    }

}

module.exports = Users

