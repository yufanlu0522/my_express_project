import React, { useEffect } from "react";
import { Layout } from "antd";
import Footer from "../Components/common/footer";
import Experience from "../Components/experience/experience";
import myExperiences from "../Data/experiences";

import INFO from "../Data/user";
import "./styles/mainPage.css";

function MainPage() {

    const [ myEducations ] = myExperiences;

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <Layout>
             <div className="page-content">
                <div className="content-wrapper">
                    <h1 style={{ fontSize: '100px', marginBottom: '40px', marginTop: '40px'}}>Hi! I'm Yufan Lu</h1>
                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src="homepage.JPG"
                                            alt="about"
                                            className="homepage-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="articles-main-container">
						<div className="title articles-title">
							{INFO.educations.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.educations.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myEducations.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Experience
											key={(index + 1).toString()}
											date={article().date}
                                            organization={article().organization}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
                </div>
            </div>
        </Layout>
    );
}

export default MainPage;