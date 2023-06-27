import React, { useEffect } from "react";
import Footer from "../Components/common/footer";
import Socials from "../Components/about/socials";
import Article from "../Components/experience/experience";
import myExperiences from "../Data/experiences";

import INFO from "../Data/user";
import "./styles/about.css";

const About = () => {

	const [ myEducations, myInternships ] = myExperiences;

  	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<div className="subtitle articles-subtitle">
						{INFO.educations.description}
					</div>
					<div className="articles-container">
						<div className="articles-wrapper">
							{myEducations.map((education, index) => (
								<div
									className="articles-article"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={education().date}
										organization={education().organization}
										title={education().title}
										description={education().description}
										link={"/article/" + (index + 1)}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="subtitle articles-subtitle">
						{INFO.internships.description}
					</div>
					<div className="articles-container">
						<div className="articles-wrapper">
							{myInternships.map((internship, index) => (
								<div
									className="articles-article"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={internship().date}
										organization={internship().organization}
										title={internship().title}
										description={internship().description}
										link={"/article/" + (index + 1)}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default About