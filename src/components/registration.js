import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
	faCheck,
	faTimes,
	FaInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const Registration = (props) => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [useFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	},[]);

	useEffect(()=>{
		const result = USER_REGEX.test(user)
		console.log(result);
		console.log(user);
		setValidName(result)
	})

	useEffect(()=>{
		const PwdResult = PWD_REGEX.test(pwd);
		console.log(PwdResult);
		console.log(pwd);
		setValidPwd(PwdResult);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd,matchPwd])


	useEffect(()=>{
		setErrMsg('');
	}, [user, pwd, matchPwd])
	return (
		<div className="registration">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
			<h1>Register</h1>
			<form>
				<label htmlFor="username">
					username:
				</label>
				<input 
					type="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.targer.value)}
					required
					aria-invalid={validName? "false" : "true"}
					aria-describedby="uidnte"
					onFocus={() => setUserFocus(true)}
					onBlur={() => setUserFocus(false)}></input>
			</form>
		</div>
	);
};

export default Registration;
