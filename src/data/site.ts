export const site = {
	name: 'Matthew Dyson',
	role: 'Data Scientist',
	tagline:
		'Building fast, accessible web experiences with clean code and thoughtful design.',
	email: 'matthew.dyson@yale.edu',
	location: 'New Haven, Connecticut',
	year: new Date().getFullYear(),
	social: {
		github: 'https://github.com/dys01',
		linkedin: 'https://www.linkedin.com/in/matthew-dyson-3b3314437/',
	},
	images: {
		hero: '/images/profile.png',
		about: '/images/hiking.png',
		aboutSecondary: '/images/overlook.png',
	},
} as const;

export type ExperienceEntry = {
	company: string;
	role: string;
	start: string;
	end: string;
	highlights: string[];
};

export const experience: ExperienceEntry[] = [
	{
		company: "Coming Soon!",
		role: 'Data Scientist',
		start: 'Present',
		end: '',
		highlights: [
			'Once I obtain more positions, I will update this section with more details.',
		],
	},
	{
		company: "Professor Mingyao Li's Lab",
		role: 'Data Scientist',
		start: 'March 2025',
		end: 'June 2026',
		highlights: [
			'Shipped customer-facing features with measurable impact on engagement.',
			'Improved performance and reliability across core product flows.',
		],
	}
];

export type SkillGroup = {
	title: string;
	items: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Tools',
		items: ['Git', 'Python', 'R', 'JavaScript'],
	},
	{
		title: 'Frontend',
		items: ['HTML', 'CSS', 'Astro'],
	},
	{
		title: 'Backend & APIs',
		items: ['Node.js'],
	}
];

export const focusAreas = [
	{
		title: 'Web development',
		description: 'Responsive, performant sites and apps using modern frameworks and best practices.',
	},
	{
		title: 'Collaboration',
		description: 'Clear communication with design and product to deliver maintainable solutions.',
	},
	{
		title: 'Hobbies',
		description: "I like playing board/card games, taking pictures, and running. I also enjoy cooking and baking, and I'm a musician.",
	}
];
