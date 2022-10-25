import React, { useState } from "react";
// import axios from "axios";
import "./App.css";

export default function Login(props) {
	return (
		<div className="Login">
			<label>Username</label>
			<input type="text"></input>
			<label>Password</label>
			<input type="text"></input>
		</div>
	);
}
