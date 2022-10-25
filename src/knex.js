// Setting the configuration according to the environment

require("dotenv").config({ path: './.env.local' })
const knex = require("knex")
const knexConfig = require("../knexfile");

let environment = process.env.NODE_ENV;

module.exports = knex(knexConfig[environment]);
