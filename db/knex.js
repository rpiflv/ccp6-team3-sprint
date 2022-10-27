require("dotenv").config()

const env =  process.env.;

const config = require("./knexfile");
const knex = require("knex")(config[env])

module.exports = knex;
