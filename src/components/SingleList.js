import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function SingleList(props) {
	const { selectedList } = props;

	const [itemName, setItemName] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [isPurchased, setisPurchased] = useState(false)

	const [itemsInList, setItemsInList] = useState([]);

	const getItems = async () => {
		const items = await axios.get(`api/items/${selectedList.id}`);
		// console.log(itemsInList);
		setItemsInList(items.data);
	};

	useEffect(() => {
		getItems();
	}, [itemsInList]);

	return (
		<div className="singleList">
			{/* <p>{selectedList.listName} LIST</p> */}
			{/* <p>LIST id {selectedList.id}</p> */}
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const item = { itemName, quantity };
					await axios.post(`/api/list/${selectedList.id}/addItem`, item);
					setItemName("");
					setQuantity(0);
					// setisPurchased(false)
				}}
			>
				<input
					type="text"
					id="add-list-box"
					placeholder="Item Name"
					value={itemName}
					onChange={(e) => {
						setItemName(e.target.value);
					}}
				></input>
				<input
					type="number"
					value={quantity}
					min="1"
					// className="add-list-box"
					placeholder="Quantity"
					onChange={(e) => {
						setQuantity(e.target.value);
					}}
				></input>
				<Button type="submit" variant="outline-dark">
					Add Item
				</Button>
			</form>
			<table>
				<thead>{selectedList.listName}</thead>
				<tr>
					<th>Item Name</th>
					<th>Quantity</th>
					<th>Done</th>
					<th>Delete</th>
				</tr>
				{itemsInList.map((item, index) => (
					<tr>
						<td>{item.itemName}</td>
						<td>{item.quantity}</td>
						<td>
							<input
								type="checkbox"
								checked={item.purchased === true ? "checked" : ""}
								onClick={async (e) => {
									const value = e.target.checked;
									console.log(e.target)
									await axios.post(`/api/lists/${selectedList.id}/${item.itemName}/toggle`, {
										purchased: !item.purchased,
									});
									getItems()
								}}
							></input>
						</td>
						<td>
							<button onClick={async (e) => {
								await axios.delete(`/api/lists/${selectedList.id}/${item.itemName}/delete`)
							}}>X</button>
						</td>
					</tr>
				))}
			</table>
		</div>
	);
}
