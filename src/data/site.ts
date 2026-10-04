export const site = {
	name: 'Matthew Dyson',
	role: 'Software Engineer',
	tagline:
		'Building fast, accessible web experiences with clean code and thoughtful design.',
	email: 'hello@example.com',
	location: 'United States',
	year: new Date().getFullYear(),
	social: {
		github: 'https://github.com',
		linkedin: 'https://linkedin.com',
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
		company: 'Your Company',
		role: 'Software Engineer',
		start: '2024',
		end: 'Present',
		highlights: [
			'Shipped customer-facing features with measurable impact on engagement.',
			'Improved performance and reliability across core product flows.',
		],
	},
	{
		company: 'Previous Team',
		role: 'Junior Developer',
		start: '2022',
		end: '2024',
		highlights: [
			'Collaborated on full-stack features from design through deployment.',
			'Introduced testing and documentation practices for shared components.',
		],
	},
];

export type SkillGroup = {
	title: string;
	items: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Frontend',
		items: ['TypeScript', 'HTML', 'CSS', 'Astro', 'React'],
	},
	{
		title: 'Backend & APIs',
		items: ['Node.js', 'REST', 'SQL'],
	},
	{
		title: 'Tools',
		items: ['Git', 'CI/CD', 'Figma', 'Linux'],
	},
];

export const focusAreas = [
	{
		title: 'Web development',
		description: 'Responsive, performant sites and apps using modern frameworks and best practices.',
	},
	{
		title: 'UI engineering',
		description: 'Accessible interfaces, design systems, and polish that holds up in production.',
	},
	{
		title: 'Collaboration',
		description: 'Clear communication with design and product to deliver maintainable solutions.',
	},
];
