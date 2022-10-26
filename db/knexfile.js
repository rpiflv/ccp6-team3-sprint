require('dotenv').config()

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.PSQL_DATABASE,
            user: process.env.PSQL_USER,
            password: process.env.PSQL_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        }
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./db/migrations",
        },
        seeds: {
            directory: "./db/seeds"
        },
    }
};
