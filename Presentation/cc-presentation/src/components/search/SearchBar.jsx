import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import ButtonMedal from "../button/ButtonMedal/ButtonMedal";
import getSearch from "../../Data/getSearch";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
	const [toggle, setToggle] = useState(false);
	const srch = useRef();
	const navigate = useNavigate();

	const handleSearch = async (e) => {
		e.preventDefault();

		if (srch.current.value === "") {
			setToggle((val) => !val);
			if (!toggle) srch.current.focus();
		} else {
			try {
				const res = await getSearch(srch.current.value, 0);
				navigate("/search", { state: { results: res, searchString: srch.current.value } });
			} catch (error) {
				navigate("/search", { state: { results: [], searchString: srch.current.value } });
				console.log(error);
			}
			setToggle((val) => !val);
			if (!toggle) srch.current.focus();
		}
	};

	return (
		<div className={classes.bar}>
			<form className={classes.searchForm + " " + props["bs-class"]}>
				<div className={(toggle ? classes.expand : "") + " " + classes.container}>
					<input
						type="text"
						name="input"
						ref={srch}
						placeholder="Search your favourite comic directly..."
						className={classes.input + " p-3"}
					/>
					<div className={classes.search}>
						<ButtonMedal bs-class="fs-6 rounded-circle " type="submit" onClick={handleSearch}>
							<FontAwesomeIcon icon={faSearch} flip={false} />
						</ButtonMedal>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
