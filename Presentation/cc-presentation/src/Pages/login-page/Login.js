import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import ButtonLit from "../../components/button/ButtonLit/ButtonLit";
import AccentInput from "../../components/input/AccentInput";
import ErrorDialog from "../../components/error/ErrorDialog";

// import CCNavbar from "../../components/navbar/navbar";
import ValidSummary from "../../components/validation/ValidSummary";
import classes from "./login.module.css";
import { fetchUsers } from "../../Data/users";
import { useNavigate } from "react-router-dom";
import TitleTyping from "../../components/title/TitleTyping/TitleTyping";

const Login = () => {
	let isLoginValid = false;
	const redirect = useNavigate();
	const [users, setUsers] = useState([]);
	const [errorMSG, setErrorMSG] = useState(false);
	const [errorMessage, setErrorMessage] = useState("Oops! We're facing an unexpected error!");

	const username = useRef(null);
	const password = useRef(null);

	const [uNameValid, setUNameValid] = useState(false);
	const [uNameLenValid, setUNameLenValid] = useState(false);
	const [uNameCharValid, setUNameCharValid] = useState(false);

	const [pwValid, setPWValid] = useState(false);
	const [pwUpperValid, setPWUpperValid] = useState(false);
	const [pwLowerValid, setPWLowerValid] = useState(false);
	const [pwNumValid, setPWNumValid] = useState(false);
	const [pwSPValid, setPWSPValid] = useState(false);
	const [pwLenValid, setPWLenValid] = useState(false);

	const [emailValid, setEmailValid] = useState(false);

	useEffect(() => {
		fetchUsers().then((res) => setUsers(res));
	}, []);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (username.current.value !== "" && password.current.value !== "") {
			if (uNameCharValid || emailValid) {
				if (pwLenValid && pwLowerValid && pwUpperValid && pwNumValid && pwSPValid) {
					users.forEach((user) => {
						if (
							(uNameCharValid &&
								user.username === username.current.value.toLowerCase() &&
								user.password === password.current.value) ||
							(emailValid &&
								user.email === username.current.value.toLowerCase() &&
								user.password === password.current.value)
						) {
							isLoginValid = true;
						}
					});
					if (isLoginValid) {
						if (emailValid) {
							users.forEach((user) => {
								if (user.email === username.current.value.toLowerCase()) {
									localStorage.setItem("comic-corner-user", user.username);
									redirect("/");
								}
							});
						} else {
							localStorage.setItem("comic-corner-user", username.current.value.toLowerCase());
							redirect("/");
						}
					} else if (!isLoginValid && emailValid) {
						setErrorMessage("E-mail address and password do not match. Either one is incorrect.");
						setErrorMSG(true);
					} else {
						setErrorMessage("Username and password do not match. Either one is incorrect.");
						setErrorMSG(true);
					}
				} else {
					setErrorMessage("Password should meet all the criterias in the below list. Please recheck the password.");
					setErrorMSG(true);
				}
			} else {
				setErrorMessage("The first field can either be your username or email address. Please check again.");
				setErrorMSG(true);
			}
		} else {
			setErrorMessage("One or both the fileds are empty. Fill both the fields please.");
			setErrorMSG(true);
		}
	};
	const handleUserValidation = (e) => {
		const email = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);
		const username = new RegExp(/^[a-zA-Z0-9_.-]{3,16}$/);

		if (e.target.value) setUNameValid(true);
		else setUNameValid(false);
		if (e.target.value.length >= 3) setUNameLenValid(true);
		else setUNameLenValid(false);
		if (username.test(e.target.value)) setUNameCharValid(true);
		else setUNameCharValid(false);
		if (email.test(e.target.value)) setEmailValid(true);
		else setEmailValid(false);
	};
	const handlePWValidation = (e) => {
		const upper = new RegExp(/(?=.*[A-Z])/);
		const lower = new RegExp(/(?=.*[a-z])/);
		const num = new RegExp(/(?=.*\d)/);
		const sp = new RegExp(/(?=.*[!@#$%^&*()_\-+={}[\];:'"\\|,.<>/?])/);

		if (e.target.value) setPWValid(true);
		else setPWValid(false);
		if (upper.test(e.target.value)) setPWUpperValid(true);
		else setPWUpperValid(false);
		if (lower.test(e.target.value)) setPWLowerValid(true);
		else setPWLowerValid(false);
		if (num.test(e.target.value)) setPWNumValid(true);
		else setPWNumValid(false);
		if (sp.test(e.target.value)) setPWSPValid(true);
		else setPWSPValid(false);
		if (e.target.value.length >= 8) setPWLenValid(true);
		else setPWLenValid(false);
	};
	const handleErrorDialog = () => {
		setErrorMSG(false);
	};
	return (
		<div className="container-fluid">
			{/* <CCNavbar /> */}
			<div className="login pt-5">
				<div className={classes.words}>
					<span>C</span>
					<span>O</span>
					<span>M</span>
					<span>I</span>
					<span>C</span>
					<span className="px-4"> </span>
					<span>C</span>
					<span>O</span>
					<span>R</span>
					<span>N</span>
					<span>E</span>
					<span>R</span>
				</div>
			</div>
			<div className="row">
				<div className="display-1 pt-4 text-white">Login</div>
			</div>
			<div className="row container mx-auto">
				<Form className="col-12 col-md-8 mx-auto" id="login-form" method="multipart/form-data" noValidate>
					<div className="mt-5">
						<AccentInput
							bs-class="mb-3 mb-md-5"
							type="text"
							name="user"
							label="hero name or email address"
							placeholder="hero name or email address"
							inpRef={username}
							onChange={handleUserValidation}
							required
						/>
						<AccentInput
							bs-class="mb-3 mb-md-5"
							type="password"
							name="password"
							label="password"
							placeholder="password"
							inpRef={password}
							onChange={handlePWValidation}
							required
						/>
					</div>
				</Form>
				<div className="row justify-content-center">
					<div className="col-11 col-xxl-5 mx-auto m-xxl-3 container-fluid rounded rounded-4 shadow bg-dark">
						<div className="col-12 text-start fs-3 text-muted ps-4 pt-3">E-Mail Address:</div>
						<ValidSummary isValid={emailValid}>E-mail shan't be invalid!</ValidSummary>
						<div className="col-12 text-start fs-3 text-muted ps-4 pt-3">Username:</div>
						<ValidSummary isValid={uNameValid}>Hero name shan't be empty!</ValidSummary>
						<ValidSummary isValid={uNameLenValid}>Hero name shall be atlease 3 letters.</ValidSummary>
						<ValidSummary isValid={uNameCharValid}>
							Hero name may have alphabets, numbers, underscores, dots, and hyphens.
						</ValidSummary>
						<div className="d-xxl-none m-0">
							<div className="col-12 text-start fs-3 text-muted ps-4 pt-3">Password:</div>
							<ValidSummary isValid={pwValid}>Secret code shan't be empty!</ValidSummary>
							<ValidSummary isValid={pwLenValid}>Secret code shall be 8 characters atleast!</ValidSummary>
							<ValidSummary isValid={pwUpperValid}>Secret code must have an uppercase letter!</ValidSummary>
							<ValidSummary isValid={pwLowerValid}>Secret code must have an lowercase letter!</ValidSummary>
							<ValidSummary isValid={pwNumValid}>Secret code must have a digit!</ValidSummary>
							<ValidSummary isValid={pwSPValid}>Secret code must have a special character!</ValidSummary>
						</div>
					</div>
					<div className="col-12 col-xxl-5 mx-auto m-xxl-3 d-none d-xxl-block container-fluid rounded rounded-4 shadow bg-dark">
						<div className="col-12 text-start fs-3 text-muted ps-4 pt-3">Password:</div>
						<ValidSummary isValid={pwValid}>Secret code shan't be empty!</ValidSummary>
						<ValidSummary isValid={pwLenValid}>Secret code shall be 8 characters atleast!</ValidSummary>
						<ValidSummary isValid={pwUpperValid}>Secret code must have an uppercase letter!</ValidSummary>
						<ValidSummary isValid={pwLowerValid}>Secret code must have an lowercase letter!</ValidSummary>
						<ValidSummary isValid={pwNumValid}>Secret code must have a digit!</ValidSummary>
						<ValidSummary isValid={pwSPValid}>Secret code must have a special character!</ValidSummary>
					</div>
				</div>
				<span className="mb-5" />
				<ButtonLit type="submit" form="login-form" bs-class="fs-3 mb-5 col-11 col-lg-4 mx-auto" onClick={handleFormSubmit}>
					bam!!!
				</ButtonLit>
				<div className="row g-0">
					<TitleTyping href="signup" bs-class="mx-auto mb-5 fs-4" width="75%">
						Not a hero yet? Get a super power now!
					</TitleTyping>
				</div>
			</div>
			{errorMSG && <ErrorDialog message={errorMessage} onClose={handleErrorDialog} />}
		</div>
	);
};

export default Login;
