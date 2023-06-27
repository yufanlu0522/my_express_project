
function experience_1() {
	return {
		date: "Sep 2021 - May 2023",
		organization: "Carnegie Mellon University, Heinz College",
		title: "Master of Information Systems Manegement, Distinction",
		description:
			`Web Application Development, Distributed Systems for Information Systems Management, Advanced Database
			Management, Introduction to Deep Learning, NoSQL Database, Data Structure and Algorithms, Data Focused Python, Cloud Security.`,
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`
	};
}

function experience_2() {
	return {
		date: "Sep 2017 - Jun 2021",
		organization: "University of International Business and Economics, School of Finance and Banking",
		title: "Bachelor of Economics, Major in Finance",
		description:
			"National Scholarship (1%); First-class Scholarship (5%); CFA Student Scholarship (Top 3 in the class).",
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		]
	};
}

function experience_3() {
	return {
		date: "May 2022 - Aug 2022",
		organization: "Wisecar PTY LTD",
		title: "Software Developer Intern of Mobile Team",
		description:
			`• Followed CI/CD pipeline to build a reimbursement mobile application, with React Native and Typescript, test and deploy the iOS app and publish it on TestFlight. \n
			• Tested RESTful 53API endpoints with Golang using Postman & Jenkins, and utilizing them in our app using Axios package, gave feedback to the backend team, made change accordingly to adhere to the business logic. \n
			• Solely responsible for devising more than 10 responsive screens according to the Figma design, enabled users to manage their claims data, cooperate closely with the Android team, ensured the app has consistency on Android.`,
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		]
	};
}

function experience_4() {
	return {
		date: "Jun 2020 - Sep 2020",
		organization: "China Minsheng Bank Headquarters ",
		title: "Data Analyst Intern",
		description:
			`• Implemented PL/SQL procedures and functions to collect personal loan data, including loan applications and approvals, analyzed their changing trend utilizing yoy, and concluded that 2-tier cities should be focused on marketing. \n
			• Enhanced the internal anti-fraud model by onboarding external anti-fraud data from Baihang Credit and Tencent. \n
			• Used SAS to process personal loan data, output credit score through personal information and historical default.`,
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		]
	};
}

function experience_5() {
	return {
		date: "Nov 2019 - Jun 2020",
		organization: "Tsinghua University PBCSF",
		title: "Research Assistant",
		description:
			`• Independently completed 10+ fintech case studies, including start-ups like Robinhood, Revolut, and researched their business models, innovation and technology used etc., published on Wechat official account. \n
			• Translated articles such as the annual report of Goldman Sachs and NFIP flood insurance paper, helped researcher finish a global finance research report published on Wechat official account.`,
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		]
	};
}

function experience_6() {
	return {
		date: "Jun 2019 - August 2019",
		organization: "China Merchants Securities Co., Ltd.",
		title: "Research Intern",
		description:
			`• Assisted the chief researcher in investigating UPS and a leading highway company, reviewed the history of UPS, compared data (price per delivery, truck and aircraft fleet, capex) with those of the Chinese top delivery companies; completed 2 depth research reports with 30+ pages, showing that SF express had great potential. \n
			• In 2-years’ time after the reporting date, the stock price of SF express increased over 60%, which verifies the fidelity of the report.`,
		keywords: [
			"Master of Science",
			"Yufan",
			"Yufan L",
			"Yufan Lu",
		]
	};
}

const myEducations = [experience_1, experience_2];
const myInternships = [experience_3, experience_4, experience_5, experience_6];
const myExperiences = [myEducations, myInternships];

export default myExperiences;
