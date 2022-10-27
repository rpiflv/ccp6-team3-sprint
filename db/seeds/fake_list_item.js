/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("lists").del();
  await knex("items").del();
  await knex("items_in_list").del();

  await knex("lists").insert([{ list_name: "fake shopping list" }]);
  await knex("items").insert([
    { item_name: "fake item 1" },
    { item_name: "fake item 2" },
  ]);
  await knex("items_in_list").insert([
    { list_id: 1, item_id: 1, quantity: 10, purchased: false },
  ]);
};
