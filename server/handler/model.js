const knex = require("../../db/knex");

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
      .from("lists");
  },

  getAllItemsFromList(listId) {
    return knex
      .select({
        itemName: "item_name",
        quantity: "quantity",
        purchased: "purchased"
      })
      .from("items_in_list")
      .join("items", {"items.id": "items_in_list.item_id"})
      .where("items_in_list.list_id", "=", listId);
  },

  getUserData(userId) {
    return knex.select({
        userName: "user_name",
        userEmail: "user_email",
        userProPic: "user_pro_pic",
        userPassword: "user_password"
    })
    .from("users")
    .where("id", "=", userId);
  },

  getAllUsersFromList(listId) {
    return knex.select({
      userName: "user_name",
      userProPic: "user_pro_pic"
    })
    .from("users_in_list")
    .join("users", {"users.id": "users_in_list.user_id"})
    .where('users_in_list.user_id', '=', listId)
  }
};
