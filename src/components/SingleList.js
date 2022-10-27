import React, { useState } from "react";
import axios from "axios";

export default function SingleList(props) {
	const { selectedList} = props;

	const [itemName, setItemName] = useState("");
	const [quantity, setQuantity] = useState(0);

  const [selectedListItems, setSelectedListItems] = useState([]);
  
  

	return (
		<div>
			Hello this is from Single List compo
			<p>{selectedList.listName}</p>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const item = { itemName, quantity };
					let data = await axios.post("/api/add-item", item);
					setItemName("");
					setQuantity(0);
					selectedListItems.push(data.data);
					console.log(selectedList);
				}}
			>
				<input
					type="text"
					// className="add-list-box"
					placeholder="Item Name"
					onChange={(e) => {
						setItemName(e.target.value);
					}}
				></input>
				<input
					type="number"
					min="1"
					// className="add-list-box"
					placeholder="Quantity"
					onChange={(e) => {
						setQuantity(e.target.value);
					}}
				></input>
				<button type="submit">Add Item</button>
			</form>
			{selectedListItems.map((itemData, index) => (
				// <img
				// 	alt=""
				// 	className={className}
				// 	onClick={() => {
				// 		setSelectedPhoto(photos[index]);
				// 		setCurrentView("singlePhoto");
				// 	}}
				// 	src={`data:image/jpeg;base64, ${photo}`}
				// ></img>

				<div>
					<span>{itemData.itemName}</span>
					<span>{itemData.quantity}</span>
					<input type="checkbox"></input>
				</div>
			))}
		</div>
	);
}
