require('dotenv').config()

// DB configurations
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
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

    // production: {
    //     client: "pg",
    //     connection: {
    //         host: process.env.POSTGRES_HOST,
    //         port: Number(process.env.PORT),
    //         user: process.env.POSTGRES_USER || "Rick",
    //         password: process.env.POSTGRES_PASSWORD,
    //         database: process.env.POSTGRES_DB || "ccpixels",
    //     },
    //     migrations: {
    //         directory: "./data/migrations",
    //     },
    //     seeds: { directory: "./data/seeds" },
    // }
};
