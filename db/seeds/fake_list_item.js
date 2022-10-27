/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("lists").del();
  await knex("items").del();
  await knex("items_in_list").del();
  await knex("user_in_list").del();

  await knex("users").insert([{
    user_name: "test user",
    user_email: "abc@ccp6team3.com",
    user_passward: "0123456789"
  }]);
  await knex("lists").insert([{ list_name: "test list",}]);
  await knex("items").insert([
    { item_name: "test item 1" },
    { item_name: "test item 2" },
  ]);
  await knex("items_in_list").insert([
    { list_id: 1, item_id: 1, quantity: 10, purchased: false },
  ]);
  await knex("users_in_list").insert([
    { list_id: 1, user_id: 1}
  ]);
};
