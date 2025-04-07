const pool = require('./db')

async function updateUser(id, name, email) {
    const updateQuery = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *'
    try {
        const res = await pool.query(updateQuery, [name, email, id])
        return res.rows[0]
    } catch(err) {
        throw err
    }
}

async function deleteUser(id) {
    const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING *'
    try {
        const res = await pool.query(deleteQuery, [id])
        return res.rows[0]
    } catch(err) {
        throw err
    }
}