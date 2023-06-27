import React from "react";
import { Link } from "react-router-dom";

import "./style/experience.css";

const Experience = (props) => {
	const { date, organization, title, description } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<Link>
					<div className="article-right-side">
						<div className="article-title">{organization}</div>
						<div className="article-subtitle">{title}</div>
						<div className="article-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Experience;
