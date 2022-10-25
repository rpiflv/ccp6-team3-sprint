import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Registration(props) {
	return (
		<div className="registration">
			<label>Username</label>
			<input type="text"></input>
			<label>Password</label>
			<input type="text"></input>
			<label>Reenter password</label>
			<input type="text"></input>
		</div>
	);
}
