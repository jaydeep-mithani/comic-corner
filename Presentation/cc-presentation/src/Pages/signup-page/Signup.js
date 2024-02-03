import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../Data/users";
import Form from "react-bootstrap/Form";
import axios from "axios";

import AccentInput from "../../components/input/AccentInput";
// import CCNavbar from "../../components/navbar/navbar";
import ButtonLit from "../../components/button/ButtonLit/ButtonLit";
import ValidSummary from "../../components/validation/ValidSummary";
import ErrorDialog from "../../components/error/ErrorDialog";
import TitleTyping from "../../components/title/TitleTyping/TitleTyping";

import classes from "./signup.module.css";

const Signup = () => {
  const redirect = useNavigate();
  const [users, setUsers] = useState([]);

  const [errorMSG, setErrorMSG] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "One or more fieds are either empty or invalid. Make sure the below list is checked!"
  );

  const firstName = useRef(null);
  const lastName = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef("");

  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(
    "./assets/ProfilePic-Placeholder.png"
  );

  const [fNameValid, setFNameValid] = useState(false);
  const [lNameValid, setLNameValid] = useState(false);

  const [uNameValid, setUNameValid] = useState(false);
  const [uNameLenValid, setUNameLenValid] = useState(false);
  const [uNameCharValid, setUNameCharValid] = useState(false);

  const [pwVal, setPWVal] = useState("");
  const [confPWVal, setConfPWVal] = useState("");
  const [pwValid, setPWValid] = useState(false);
  const [pwUpperValid, setPWUpperValid] = useState(false);
  const [pwLowerValid, setPWLowerValid] = useState(false);
  const [pwNumValid, setPWNumValid] = useState(false);
  const [pwSPValid, setPWSPValid] = useState(false);
  const [pwLenValid, setPWLenValid] = useState(false);
  const [pwConf, setPWConf] = useState(false);

  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res));
  }, [users]);

  useEffect(() => {
    if (pwVal !== "" && pwVal === confPWVal) setPWConf(true);
    else setPWConf(false);
  }, [pwVal, confPWVal]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !fNameValid ||
      !lNameValid ||
      !uNameCharValid ||
      !emailValid ||
      !pwUpperValid ||
      !pwLowerValid ||
      !pwNumValid ||
      !pwSPValid ||
      !pwLenValid ||
      !pwConf
    ) {
      setErrorMessage(
        "One or more fieds are either empty or invalid. Make sure the below list is checked!"
      );
      setErrorMSG(true);
    } else if (
      users
        .filter((user) => user.email !== "")
        .map((user) => user.email)
        .includes(email.current.value.toLowerCase())
    ) {
      setErrorMessage(
        'Email "' +
          email.current.value.toLowerCase() +
          '" is already in use! Try using another one.'
      );
      setErrorMSG(true);
    } else if (
      users
        .map((user) => user.username)
        .includes(username.current.value.toLowerCase())
    ) {
      setErrorMessage(
        'A hero with name "' +
          username.current.value.toLowerCase() +
          '" already exist. Try to create your own identity! ;-)'
      );
      setErrorMSG(true);
    } else {
      const formData = new FormData();
      formData.append("fname", firstName.current.value.toLowerCase());
      formData.append("lname", lastName.current.value.toLowerCase());
      formData.append("username", username.current.value.toLowerCase());
      formData.append("password", password.current.value);
      formData.append("email", email.current.value.toLowerCase());
      formData.append("profilePic", profile);

      try {
        const response = await axios.post(
          "https://comic-corner-backend.onrender.com/user/add",
          formData
        );
        if (response.data.message === "user added successfully.") {
          localStorage.setItem(
            "comic-corner-user",
            username.current.value.toLowerCase()
          );
          redirect("/");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "We're sincerely sorry. It seems something went wrong on our end. Please try again later."
        );
        setErrorMSG(true);
      }
    }
  };
  const handleFNameValidation = (e) => {
    if (e.target.value) setFNameValid(true);
    else setFNameValid(false);
  };
  const handleLNameValidation = (e) => {
    if (e.target.value) setLNameValid(true);
    else setLNameValid(false);
  };
  const handleUNameValidation = (e) => {
    const regex = new RegExp(/^[a-zA-Z0-9_.-]{3,16}$/);

    if (e.target.value) setUNameValid(true);
    else setUNameValid(false);
    if (e.target.value.length >= 3) setUNameLenValid(true);
    else setUNameLenValid(false);
    if (regex.test(e.target.value)) setUNameCharValid(true);
    else setUNameCharValid(false);
  };
  const handlePWValidation = (e) => {
    setPWVal(e.target.value);
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
  const handlePWConfirmValidation = (e) => {
    setConfPWVal(e.target.value);
  };
  const handleEmailValidation = (e) => {
    const regex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);

    if (e.target.value === "" || regex.test(e.target.value))
      setEmailValid(true);
    else setEmailValid(false);
  };

  const handleErrorDialog = () => {
    setErrorMSG(false);
  };

  return (
    <>
      <div className="container-fluid">
        {/* <CCNavbar /> */}
        <div className={classes["text-container"] + " display-1 pt-5"}>
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
        <div className="row">
          <div className="display-1 pt-4 text-white">Sign-up now!</div>
        </div>
        <div className="container">
          <div className="row g-0">
            <Form
              className="col-12 col-xxl-6"
              id="signup-form"
              method="multipart/form-data"
              noValidate
            >
              <div className="mb-4 mt-5">
                <div
                  className={
                    "mx-auto rounded rounded-circle overflow-hidden shadow " +
                    classes.preview
                  }
                >
                  <img
                    className={"img-fluid " + classes.prw}
                    src={profilePreview}
                    alt="profile-pic"
                  />
                </div>
              </div>
              <AccentInput
                bs-class="mb-5 fs-4"
                btn-class="px-5"
                type="file"
                accept=".jpg, .png, .jpeg"
                name="profilePic"
                fileRef={setProfile}
                onUpload={setProfilePreview}
              >
                <span className="me-3">Your Mask</span>
                <FontAwesomeIcon icon={faCamera} />
              </AccentInput>
              <AccentInput
                bs-class="mb-3 mb-xxl-5"
                type="text"
                name="fname"
                label="first name *"
                placeholder="first name"
                inpRef={firstName}
                onChange={handleFNameValidation}
                required
              />
              <AccentInput
                bs-class="mb-3 mb-xxl-5"
                type="text"
                name="lname"
                label="last name *"
                placeholder="last name"
                inpRef={lastName}
                onChange={handleLNameValidation}
                required
              />
              <AccentInput
                bs-class="mb-3 mb-xxl-5"
                type="email"
                name="email"
                label="e-mail"
                placeholder="email"
                inpRef={email}
                onChange={handleEmailValidation}
              />
              <AccentInput
                bs-class="mb-3 mb-xxl-5"
                type="text"
                name="username"
                label="your hero name *"
                placeholder="hero name"
                inpRef={username}
                onChange={handleUNameValidation}
                required
              />
              <AccentInput
                bs-class="mb-3 mb-xxl-5"
                type="password"
                name="password"
                label="secret code *"
                placeholder="secret code"
                inpRef={password}
                onChange={handlePWValidation}
                required
              />
              <AccentInput
                bs-class="mb-5"
                type="password"
                name="confPassword"
                label="confirm secret code *"
                placeholder="confirm secret code"
                onChange={handlePWConfirmValidation}
                required
              />
            </Form>
            <div className="col-11 col-xxl-5 mx-auto m-xxl-5 container-fluid rounded rounded-4 shadow bg-dark">
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                First Name:
              </div>
              <ValidSummary isValid={fNameValid}>
                First name shan't be empty!
              </ValidSummary>
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                Last Name:
              </div>
              <ValidSummary isValid={lNameValid}>
                Last name shan't be empty!
              </ValidSummary>
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                E-Mail Address:
              </div>
              <ValidSummary isValid={emailValid}>
                E-mail shan't be invalid!
              </ValidSummary>
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                Username:
              </div>
              <ValidSummary isValid={uNameValid}>
                Hero name shan't be empty!
              </ValidSummary>
              <ValidSummary isValid={uNameLenValid}>
                Hero name shall be atlease 3 letters.
              </ValidSummary>
              <ValidSummary isValid={uNameCharValid}>
                Hero name may have alphabets, numbers, underscores, dots, and
                hyphens.
              </ValidSummary>
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                password:
              </div>
              <ValidSummary isValid={pwValid}>
                Secret code shan't be empty!
              </ValidSummary>
              <ValidSummary isValid={pwLenValid}>
                Secret code shall be 8 characters atleast!
              </ValidSummary>
              <ValidSummary isValid={pwUpperValid}>
                Secret code must have an uppercase letter!
              </ValidSummary>
              <ValidSummary isValid={pwLowerValid}>
                Secret code must have an lowercase letter!
              </ValidSummary>
              <ValidSummary isValid={pwNumValid}>
                Secret code must have a digit!
              </ValidSummary>
              <ValidSummary isValid={pwSPValid}>
                Secret code must have a special character!
              </ValidSummary>
              <div className="col-12 text-start fs-3 text-muted ps-4 pt-3">
                confirm password:
              </div>
              <ValidSummary isValid={pwConf}>
                Confirm secret code shall be same as the secret code!
              </ValidSummary>
            </div>
            <span className="mb-5" />
            <ButtonLit
              type="submit"
              form="signup-form"
              bs-class="fs-3 mb-5 col-11 col-lg-4 mx-auto"
              onClick={handleFormSubmit}
            >
              cowabunga!!!
            </ButtonLit>
          </div>
          <div className="row g-0">
            <TitleTyping bs-class="mx-auto mb-5 fs-4" href="login" width="75%">
              Already a Hero? Click here to login.
            </TitleTyping>
          </div>
        </div>
      </div>
      {errorMSG && (
        <ErrorDialog message={errorMessage} onClose={handleErrorDialog} />
      )}
    </>
  );
};

export default Signup;
