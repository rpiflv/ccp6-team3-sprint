const knex = require("../../knex");

//handlers for the routes

module.exports = {
    // provides all the lists in the DB
    getAllLists() {
        return knex
            .select({
                id: "id",
                listName: "list_name",
                owner: "list_owner",
            })
            .from("shopping_lists");
    },
};