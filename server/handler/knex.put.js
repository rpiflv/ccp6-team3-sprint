const knex = require("../../db/knex");

 module.exports = {
	updateItemState(data, listId) {
		return knex("items_in_list")
			.update({purchased: data.purchased})
			.where({ list_id: listId })
			.where({item_name: data.itemName})
	}

 }