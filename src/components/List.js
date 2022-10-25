import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Login(props) {
    	const [listName, setListName] = useState("");


	return (
		<div className="List">
			<form>
				<input
					type="text"
					placeholder="Item Name"
					onChange={(e) => {
						setListName(e.target.value);
					}}
				></input>
				<button
					type="addItem"
					onClick={async () => {
						let x = await axios.post("/api/create-list", { listName });
						setListName("");
					}}
				>
					Add List
				</button>
			</form>
            <div className="Item">List Item 1</div>
            <div className="Item">List Item 2</div>
            <div className="Item">List Item 3</div>
            <div className="Item">List Item 4</div>
            <div className="Item">List Item 5</div>
            <div className="Item">List Item 6</div>
		</div>
	);
}