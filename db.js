const { Pool } = requires('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'JUostgres@08',
    port: 5432
})

module.exports = pool
