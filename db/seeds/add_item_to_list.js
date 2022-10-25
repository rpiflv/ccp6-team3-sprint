/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items_in_list').del()
  await knex('items_in_list').insert([
    { list_id: 1, item_id: 1, quantity: 10, purchased: false },
  ]);
};
