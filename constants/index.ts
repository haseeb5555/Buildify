export type SiteConfig = typeof siteConfig;

export const buildingReviews = [
	{
		title: "A Four Floor Building",
		price: "$4000",
		reviewContent:
			"Our experience with Faheem Don Constructors has been outstanding! The construction team demonstrated exceptional skill and professionalism. The attention to detail in every aspect of the project, from planning to execution, was remarkable. We highly recommend Faheem Don Constructors for their top-notch construction services.",
		rating: 4.5,
		image: "/assets/images/user.png",
		name: "Alice Johnson",
		date: "Feb 2021",
	},
	{
		title: "Modern Apartment Complex",
		price: "$6000",
		reviewContent:
			"We are thrilled with the Modern Apartment Complex built by Urban Builders. The architectural design is innovative, and the construction quality is superb. Urban Builders exceeded our expectations, delivering a luxurious living space. We highly endorse their services.",
		rating: 4.8,
		image: "/assets/images/user.png",
		name: "Bob Smith",
		date: "Jan 2021",
	},
	{
		title: "Commercial Office Tower",
		price: "$10,000",
		reviewContent:
			"XYZ Construction Group did an excellent job constructing our commercial office tower. Their project management skills ensured a smooth construction process. The office spaces are well-designed and functional. We are extremely satisfied with the outcome.",
		rating: 4.2,
		image: "/assets/images/user.png",
		name: "Charlie Brown",
		date: "Dec 2020",
	},
	// Add more building reviews as needed
];
export const posts = [
	{
		profile: {
			name: "John Doe",
			username: "john_doe",
			imageSrc: 'assets/images/user.png',
		},
		tweet: `
	  🏗️ Freelance Building Constructor: Transform your vision into reality with my expertise. From personalized approaches to transparent communication, expect top-notch craftsmanship, on-time delivery, and budget-friendly solutions. Let's build something amazing! 🏡🔨
	  `,
		likes: 123,
		retweets: 45,
		timestamp: "10:30 AM · Sep 1, 2023",
	},
	{
		profile: {
			name: "Jane Smith",
			username: "jane_smith",
			imageSrc: 'assets/images/user.png',
		},
		tweet: `🏗️ Freelance Building Constructor: Transform your vision into reality with my expertise. From personalized approaches to transparent communication, expect top-notch craftsmanship, on-time delivery, and budget-friendly solutions. Let's build something amazing! 🏡🔨 `,
		likes: 210,
		retweets: 87,
		timestamp: "2:45 PM · Sep 1, 2023",
	},
	// Add more dummy data as needed
];
export const userProfiles = [
	{
		banner: "/assets/images/user.png",
		name: "Alice Johnson",
		image: "/assets/images/user.png",
		username: "alice123",
		bio: "Passionate about creativity and technology. Web developer by day, musician by night.",


	},
	{
		banner: "/assets/images/user.png",
		name: "Bob Smith",
		image: "/assets/images/user.png",
		username: "bobsmith87",
		bio: "Explorer of the digital world. Loves coding, gaming, and coffee."
	},
	{
		banner: "/assets/images/user.png",
		name: "Charlie Brown",
		image: "/assets/images/user.png",
		username: "cbrown",
		bio: "Freelance designer with a keen eye for aesthetics. Turning ideas into visual delights."
	},
	{
		banner: "/assets/images/user.png",
		name: "Alice Johnson",
		image: "/assets/images/user.png",
		username: "alice123",
		bio: "Passionate about creativity and technology. Web developer by day, musician by night.",


	},
	{
		banner: "/assets/images/user.png",
		name: "Bob Smith",
		image: "/assets/images/user.png",
		username: "bobsmith87",
		bio: "Explorer of the digital world. Loves coding, gaming, and coffee."
	},
	{
		banner: "/assets/images/user.png",
		name: "Charlie Brown",
		image: "/assets/images/user.png",
		username: "cbrown",
		bio: "Freelance designer with a keen eye for aesthetics. Turning ideas into visual delights."
	}
];

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [

	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};

export const C_sidebarLinks = [

	{
		imgURL: "/assets/heart.svg",
		route: "/chat",
		label: "Chat",
	},
	{
		imgURL: "/assets/create.svg",
		route: "/init-project",
		label: "Initiate Window",
	},
	{
		imgURL: "/assets/search.svg",
		route: "/search-client",
		label: "Search Clients",
	},

	{
		imgURL: "/assets/user.svg",
		route: "/jobs",
		label: "Jobs"
	},
	{
		imgURL: "/assets/user.svg",
		route: "/cp",
		label: "Profile",

	},
	{
		imgURL: "/assets/user.svg",
		route: '/windows',
		label: 'My Rooms'
	}
];

export const sidebarLinks = [
	{
		imgURL: "/assets/home.svg",
		route: "/posts",
		label: "Home",
	},
	{
		imgURL: "/assets/search.svg",
		route: "/search",
		label: "Search",
	},
	{
		imgURL: "/assets/heart.svg",
		route: "/chat",
		label: "Chat",
	},
	{
		imgURL: "/assets/create.svg",
		route: "/add-project",
		label: "Create Project",
	},

	{
		imgURL: "/assets/user.svg",
		route: "/profiles",
		label: "Constructor Profiles",
	},
	{
		imgURL: "/assets/user.svg",
		route: "/profile",
		label: "Profile",
	},
	{
		imgURL: "/assets/user.svg",
		route: "/ai-assistant",
		label: "AI Assistant ✨ ",
	},
];


export const navMenuItems = [
	{
		label: "Profile",
		href: "/profile",
	},
	{
		label: "Dashboard",
		href: "/dashboard",
	},
	{
		label: "Projects",
		href: "/projects",
	},
	{
		label: "Team",
		href: "/team",
	},
	{
		label: "Calendar",
		href: "/calendar",
	},
	{
		label: "Settings",
		href: "/settings",
	},
	{
		label: "Help & Feedback",
		href: "/help-feedback",
	},
	{
		label: "Logout",
		href: "/logout",
	},
]


export const services = [
	{
		title: "Track Project Finances",
		description: "Gain real-time insights into project expenditures, revenue, and losses. "

	},
	{
		title: "Visual Progress Reports",
		description: "Stay connected with project development through visual updates. "
	},
	{
		title: "Graphical Project Insights",
		description: "Make data-driven decisions with our visual representation tools. "
	},
	{
		title: "Stay On Budget",
		description: "Ensure your project stays within budget with our budget control feature."
	}
]

export const reviews = [
	{
		imgURL: '/assets/images/customer1.jpeg',
		customerName: 'Morich Brown',
		rating: 4.5,
		feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
	},
	{
		imgURL: '/assets/images/customer2.svg',
		customerName: 'Lota Mongeskar',
		rating: 4.5,
		feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
	},
	{
		imgURL: 'data:image/jpeg;base64,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',
		customerName: 'Lota Mongeskar',
		rating: 4.5,
		feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
	}
];


export const whyChooseUs = [
	{
		icon: "/assets/icons/solid-star.svg",
		title: "Proof of quality",
		description: "Check any pro’s work samples, client reviews, and identity verification."
	},
	{
		icon: "/assets/icons/dollar.svg",
		title: "No cost until you hire",
		description: "Interview potential fits for your job, negotiate rates, and only pay for work you approve."
	},
	{
		icon: "/assets/icons/tick.svg",
		title: "Safe and secure",
		description: "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it."
	}
]
export const images = [
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
];