import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CCNavbar from "../../components/navbar/navbar";
import TitleBanner from "../../components/title/TitleBanner/TitleBanner";
import ShowCaseCardFlip from "../../components/showcase/ShowCaseCardFlip/ShowCaseCardFlip";
import SearchBar from "../../components/search/SearchBar";

const Search = () => {
	const location = useLocation();
	const [results, setResults] = useState(null);
	const [query, setQuery] = useState(null);

	useEffect(() => {
		setResults(location.state.results);
		setQuery(location.state.searchString);
	}, [location.state.results, location.state.searchString]);

	return (
		<Fragment>
			<div className="container-fluid">
				<CCNavbar url={process.env.PUBLIC_URL} />
				<TitleBanner>Search Results</TitleBanner>
				{results && results.length ? (
					<div className="mb-5">
						<div className="fs-1 text-white mb-4">Showing results for "{query}"</div>
						<ShowCaseCardFlip data="search" res={results} />
					</div>
				) : (
					<div className="fs-1 text-white">
						No results found for {query}.<div className="fs-4 text-white-50">&#40; Hint: Check for a typo, or try searching another keyword. &#41;</div>
					</div>
				)}
			</div>
			<SearchBar />
		</Fragment>
	);
};

export default Search;
