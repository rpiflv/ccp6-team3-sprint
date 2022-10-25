// Setting the configuration according to the environment

require("dotenv").config({ path: './.env.local' })
const knexConfig = require("../db/knexfile");
const knex = require("knex")

let environment = process.env.NODE_ENV;

module.exports = knex(knexConfig[environment]);
