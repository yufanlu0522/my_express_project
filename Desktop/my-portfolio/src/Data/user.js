const INFO = {
	main: {
		title: "Portfolio by yufanlu",
		name: "Yufan Lu",
		email: "yufanlu1999@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/yufanlu0522",
		linkedin: "https://www.linkedin.com/in/yufan-lu-b7a328246",
		instagram: "https://www.instagram.com/yufan990522/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and amateur photographer.",
		description:
			"I am a software developer with expertise in Java, Javascript, Typescript, Python and framework like React.js and Django. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Yufan Lu. I live in Pittsburgh, PA, United States.",
		description:
			"I've worked on a variety of projects during my study and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	educations: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Timeline of my past education.",
	},

	internships: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Timeline of my past internships.",
	},

	projects: [
		{
			title: "Loading Optimization Project",
			description:
				`• Worked with world-leading wood product client Koppers, developed a web-application loading optimization calculator with JavaScript and Python, client offered $1000 to buy out the application.
				• Utilized Gekko for optimization model development, generating the optimized loading arrangement for railcars.
				• Employed JavaScript and Django for application development, creating interactive UI for Koppers' employees to use.`,
			logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"],
			linkText: "View Project",
			link: "https://github.com/yufanlu0522/capstone_project/tree/lyt",
		},

		{
			title: "Hotel Booking Project",
			description:
				`• Devised an interactive web application for a hotel to check availability, place order and make payment in Django, React.
				• Built under the framework of separation of front and backends, using CSRF token to handle cross origin issue, handling requests with Django REST framework and storing data in SQLite.
				• Integrate Google Sign-in as our OAuth method, and Stripe as our payment API, python, React, CSS.
				• Used hooks in React like UseState, UseEffect to achieve Ajax to make room list update with latest status without refreshing and deployed the application onto AWS EC2 cloud platform and Microsoft Azure.`,
			logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"],
			linkText: "View Project",
			link: "https://github.com/yufanlu0522/Webapps-project",
		},

		{
			title: "Java Mobile Application Project ",
			description:
				`• Built an Android mobile application for searching real-time foreign currency exchange rate.
				• Fetched data from third-party API, process and stored in document style NoSQL database in MongoDB Atlas.
				• Developed a server to handle REST-ful API calls and CRUD operations from mobile application.
				• Deployed the application to Docker container and uploading to cloud with Heroku.`,
			logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"],
			linkText: "View Project",
			link: "https://github.com/yufanlu0522/Andriod-mobile",
		},

		{
			title: "Java Santorini Game",
			description:
				`• Developed a web-based Santorini game application using NanoHttp, Java and Typescript for an interactive experience.
				• Leveraged NanoHttp as a lightweight, high-performance HTTP server to communicate frontend and backend with Json
				• Utilized Java for backend development, implementing game logic, and ensuring code quality with JUnit testing.
				• Employed TypeScript for frontend development, creating responsive and intuitive user interfaces for seamless gameplay.`,
			logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"],
		},

		{
			title: "Java Sales System",
			description:
				`• Building a interactive UI using JavaFX to allow users to browse, search and place order.
				• Using sqlite to manage customer and order data, verify customer identity, check inventory and track order.
				• Generating quarterly sales report, customer demographic report and discount catalogue with SQL and JavaFX.`,
			logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"],
		},
	],
};

export default INFO;
