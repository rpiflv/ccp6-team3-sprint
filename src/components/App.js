import Navbar from "./Navbar";
import Registration from "./registration";
import Login from "./login";
import List from "./List";
// import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
	const [currentView, setCurrentView] = useState("allLists");
	const [lists, setLists] = useState([]);
	const [selectedList, setSelectedList] = useState("");

	return (
		<div className="bodyDiv">
			<Navbar />
			<Registration />
			<Login />
			<List />
			<br />
			Hello World
		</div>
	);
}

export default App;
