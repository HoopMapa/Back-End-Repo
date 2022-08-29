const pool = require('../db')

class Courts {
    static async getAllCourtsFromDB() {
        const sql = `SELECT * FROM courts`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSingleCourtFromDB(id) {
        const sql = `SELECT * FROM courts WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [id]);
        return dbResult.rows;
    }
    
    static async createCourtFromDB({court_name,court_level,}) {
        const sql = `INSERT INTO courts ( court_name,court_level) VALUES ($1, $2) RETURNING *` 
        const dbResult = await pool.query(sql, [ court_name,court_level,])
        return dbResult.rows;
    }
    static async updateCourtFromDB(court_id,court_name,court_level) {
        const sql = `UPDATE courts SET court_name = ($1), court_level = ($2) WHERE courts.id = ($3) RETURNING *` 
        const dbResult = await pool.query(sql,[court_id,court_name,court_level])
        return dbResult.rows;
    }

    static async deleteCourtFromDB(post_id) {
        await pool.query(`DELETE FROM courts WHERE court_id = ($1) RETURNING *`, [court_id]);
    }
}

module.exports = Courts