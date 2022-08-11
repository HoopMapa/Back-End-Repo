const pool = require('../db')

class Posts {
    static async getAllPostsFromDB() {
        const sql = `SELECT * FROM posts`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSinglePostFromDB(id) {
        const sql = `SELECT * FROM posts WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [id]);
        return dbResult.rows;
    }
    
    static async createPostFromDB({ username,post_body,basketball_court}) {
        const sql = `INSERT INTO posts (username,post_body,basketball_court) VALUES ($1, $2, $3, $4, $5, $6) returning *` 
        const dbResult = await pool.query(sql, [username, post_body,basketball_court])
        return dbResult.rows;
    }

    static async deletePostFromDB(post_id) {
        await pool.query(`DELETE FROM posts WHERE post_id = ($1) RETURNING *`, [post_id]);
    }
}

module.exports = Posts