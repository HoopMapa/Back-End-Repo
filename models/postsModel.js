const pool = require('../db')

class Posts {
    static async getAllPostsFromDB() {
        const sql = `SELECT users.username, posts.* FROM posts JOIN users ON posts.user_id = users.id`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getUserPostsFromDB(user_id) {
        const sql = `SELECT * FROM posts WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows;
    }

    static async getSinglePostFromDB(id) {
        const sql = `SELECT * FROM posts WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [id]);
        return dbResult.rows;
    }
    
    static async createPostFromDB({ user_id,post_body,basketball_court}) {
        const sql = `INSERT INTO posts (user_id,post_body,basketball_court) VALUES ($1, $2, $3) returning *` 
        const dbResult = await pool.query(sql, [user_id, post_body,basketball_court])
        return dbResult.rows;
    }

    static async deletePostFromDB(id) {
        const sql = `DELETE FROM posts WHERE id = ($1)`
        const dbResult = await pool.query(sql, [id]);
        return dbResult.rows;
    }
}

module.exports = Posts