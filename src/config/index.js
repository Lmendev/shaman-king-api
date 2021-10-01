require('dotenv').config()

const { NODE_ENV, PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const config = {
    dev: NODE_ENV !== 'production',
    port: PORT || 3000,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    dbName: DB_NAME
}

module.exports = { config }