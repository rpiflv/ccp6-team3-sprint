import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Login(props) {
	const [listName, setListName] = useState("");
	const {
		setLists,
		lists,
		setCurrentView,
		currentView,
		setSelectedList,
		selectedList,
	} = props;

	return (
		<div className="List">
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					let x = await axios.post("/api/create-list", { listName });
					console.log(x.data);
					setListName("");
					lists.push(x.data);
					console.log(lists);
				}}
			>
				<input
					type="text"
					className="add-item-box"
					placeholder="Item Name"
					onChange={(e) => {
						setListName(e.target.value);
					}}
				></input>
				<button type="addItem">Add List</button>
			</form>
			{console.log(lists)}
			{lists.map((listData, index) => (
				// <img
				// 	alt=""
				// 	className={className}
				// 	onClick={() => {
				// 		setSelectedPhoto(photos[index]);
				// 		setCurrentView("singlePhoto");
				// 	}}
				// 	src={`data:image/jpeg;base64, ${photo}`}
				// ></img>

				<div
					onClick={() => {
						setCurrentView("singleList");
						setSelectedList(lists[index]);
						console.log(currentView);
						console.log(selectedList);
					}}
				>
					{listData.listName}
				</div>
			))}
		</div>
	);
}
