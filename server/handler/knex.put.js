const knex = require("../../db/knex");

module.exports = {
	updateItemState(data, listId, itemName) {
		return knex("items_in_list")
			.where('list_id', listId)
			.where('item_name', itemName)
			.update('purchased', data.purchased)
			.catch((err) => console.log(err))
			.then(res => console.log("update"))

	}

}