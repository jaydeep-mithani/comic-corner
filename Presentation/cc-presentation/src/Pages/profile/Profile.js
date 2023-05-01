import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import { fetchHero } from "../../Data/hero";
import AccentInput from "../../components/input/AccentInput";
import CCNavbar from "../../components/navbar/navbar";
import hasProfile from "../../controller/hasProfile";

import classes from "./Profile.module.css";

const Profile = () => {
	const [thisUser, setThisUser] = useState({
		fname: "",
		lname: "",
		email: "",
		username: "",
		password: "",
	});

	const [profilePreview, setProfilePreview] = useState("./assets/ProfilePic-Placeholder.png");

	useEffect(() => {
		fetchHero().then((res) => {
			setThisUser(res[0]);
			hasProfile(`./images/profile/${res[0].username}`).then((result) => {
				if (result.exists) {
					setProfilePreview(`./images/profile/${res[0].username}.${result.extension}`);
				}
			});
		});
	}, []);

	return (
		<>
			<div className="container-fluid">
				<CCNavbar url={process.env.PUBLIC_URL} />
				<div className="container">
					<div className="row g-0">
						<Form className="col-9 mx-auto" id="signup-form" method="multipart/form-data" noValidate>
							<div className="mb-4 mt-5">
								<div className={"mx-auto rounded rounded-circle overflow-hidden shadow " + classes.preview}>
									<img className={"img-fluid " + classes.prw} src={profilePreview} alt="profile-pic" />
								</div>
							</div>
							<AccentInput
								bs-class="mb-3 mb-xxl-5"
								type="text"
								name="fname"
								label="first name *"
								placeholder="first name"
								value={thisUser.fname}
								disabled={true}
								required
							/>
							<AccentInput
								bs-class="mb-3 mb-xxl-5"
								type="text"
								name="lname"
								label="last name *"
								placeholder="last name"
								value={thisUser.lname}
								disabled={true}
								required
							/>
							<AccentInput
								bs-class="mb-3 mb-xxl-5"
								type="email"
								name="email"
								label="e-mail"
								placeholder="email"
								value={thisUser.email}
								disabled={true}
							/>
							<AccentInput
								bs-class="mb-3 mb-xxl-5"
								type="text"
								name="username"
								label="your hero name *"
								placeholder="hero name"
								value={thisUser.username}
								disabled={true}
								required
							/>
							<AccentInput
								bs-class="mb-3 mb-xxl-5"
								type="password"
								name="password"
								label="new secret code *"
								placeholder="new secret code"
								value={thisUser.password}
								disabled={true}
								required
							/>
						</Form>
						<span className="mb-5" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
