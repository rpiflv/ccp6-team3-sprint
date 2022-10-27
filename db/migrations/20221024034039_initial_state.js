/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
  return await Promise.all([
      knex.schema
          .createTable('shopping_lists', function (table) {
              table.increments('id').primary();
              table.string('list_name', 32);
              table.string('list_owner', 24)
          }),
      knex.schema
          .createTable('items', function (table) {
              table.increments("id").primary();
              table.string('item_name', 32);
          }),
      knex.schema
          .createTable('items_in_list', function (table) {
              table.integer('list_id').references('id').inTable('shopping_lists')
              table.integer('item_is').references('id').inTable('items');
              table.integer('quantity').notNullable()
              table.boolean('purchased')
          }),
      // knex.schema
      //     .createTable('users', function (table) {
      //         table.increments("id").primary();
      //         table.string('username', 255);
      //         table.string('email', 255);
      //         table.string('password', 64);
      //     }),
  ])
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = async function (knex) {
  await knex.schema.dropTable('shopping_lists')
   await knex.schema.dropTable('items')
  await knex.schema.dropTable('items_in_list')
};
