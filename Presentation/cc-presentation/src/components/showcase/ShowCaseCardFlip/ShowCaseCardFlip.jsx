import { useEffect, useState } from "react";
import { fetchComics } from "../../../Data/comics";
import Card from "../../card/Card";
import Loading from "../../loading/Loading";

const ShowCaseCardFlip = (props) => {
	const [issues, setIssues] = useState([]);

	useEffect(() => {
		if (props.data !== "search") {
			(async () => {
				try {
					if (props.data === "latestIssues") {
						const fetch = await fetchComics("latest");
						setIssues(fetch);
					} else if (props.data === "popularIssues") {
						const fetch = await fetchComics("popular");
						setIssues(fetch);
					} else if (props.data === "trendingIssues") {
						const fetch = await fetchComics("trending");
						setIssues(fetch);
					} else setIssues([]);
				} catch (err) {
					setIssues([]);
					console.log("Failed to fetch latest issues.", err);
				}
			})();
		} else setIssues(props.res);
	}, [props.data, props.res]);

	return (
		<div className="d-flex align-items-center justify-content-center flex-wrap gap-4">
			{issues && issues.length ? (
				props.all ? (
					issues.map((issue) => (
						<Card key={issue.id} id={issue.id} cover={issue.image.original_url} subtitle={issue.name}>
							{issue.volume.name}
						</Card>
					))
				) : (
					issues
						.filter((issue, count) => count < 12 && issue)
						.map((issue) => (
							<Card key={issue.id} id={issue.id} cover={issue.image.original_url} subtitle={issue.name}>
								{issue.volume.name}
							</Card>
						))
				)
			) : (
				<Loading />
			)}
		</div>
	);
};

export default ShowCaseCardFlip;
