import {
	Award,
	BookOpen,
	Briefcase,
	Cloud,
	Code2,
	Coffee,
	Database,
	GraduationCap,
	Heart,
	Mail,
	MapPin,
	Phone,
	Rocket,
	Server,
} from 'lucide-react'
import { BsTelegram } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export const skillsCategory = [
	{
		title: 'Frontend',
		icon: Code2,
		description: 'Crafting beautiful, responsive user interfaces',
		skills: [
			{
				name: 'React.js',
				level: 100,
				color: 'bg-blue-500',
			},
			{
				name: 'TypeScript',
				level: 100,
				color: 'bg-blue-600',
			},
			{
				name: 'Next.js',
				level: 100,
				color: 'bg-gray-800',
			},
			{
				name: 'Tailwind CSS',
				level: 100,
				color: 'bg-cyan-500',
			},

			{
				name: 'Framer Motion',
				level: 100,
				color: 'bg-pink-500',
			},
		],
	},

	{
		title: 'Backend',
		icon: Server,
		description: 'Building robust server-side solutions',
		skills: [
			{
				name: 'Node.js',
				level: 100,
				color: 'bg-green-500',
			},
			{
				name: 'Express.js',
				level: 100,
				color: 'bg-gray-700',
			},
			{
				name: 'Nest.js',
				level: 100,
				color: 'bg-red-400',
			},
			{
				name: 'GraphQl',
				level: 100,
				color: 'bg-fink-600',
			},

			{
				name: 'Rest API',
				level: 100,
				color: 'bg-orange-500',
			},
		],
	},

	{
		title: 'Database',
		icon: Database,
		description: 'Managing and optimizing data storage',
		skills: [
			{
				name: 'MongoDB',
				level: 100,
				color: 'bg-green-600',
			},
			{
				name: 'MongoDb',
				level: 100,
				color: 'bg-blue-700',
			},
			{
				name: 'PostgreSQL',
				level: 100,
				color: 'bg-red-400',
			},
			{
				name: 'Prisma',
				level: 100,
				color: 'bg-indigo-600',
			},

			{
				name: 'TypeORM',
				level: 100,
				color: 'bg-blue-500',
			},
		],
	},

	{
		title: 'DevOps',
		icon: Cloud,
		description: 'Deploying and sacalling applications',
		skills: [
			{
				name: 'Docker',
				level: 100,
				color: 'bg-blue-600',
			},
			{
				name: 'AWS',
				level: 100,
				color: 'bg-orange-600',
			},
			{
				name: 'Vercel',
				level: 100,
				color: 'bg-gray-000',
			},
			{
				name: 'Git',
				level: 100,
				color: 'bg-orange-700',
			},

			{
				name: 'CI/CD',
				level: 100,
				color: 'bg-purple-600',
			},
		],
	},
]

export const techStacks = [
	'JavaScript',
	'HTML',
	'CSS',
	'Sass',
	'Webpack',
	'Vite',
	'Figma',
	'Notion',
	'Slack',
]

export const stats = [
	{ number: '15+', label: 'Projects Completed' },
	{ number: '2+', label: 'Years Experience' },
	{ number: '20+', label: 'Technologies' },
	{ number: '100%', label: 'Client Satisfaction' },
]

export const projects = [
	{
		id: 1,
		title: 'Udemy clone',
		githubUrl: 'https://github.com/frontend-tester02/udemy',
		demoUrl: 'https://udemy.shoky.dev/en',
		image: '/images/udemy-clone.png',
		description:
			'Revolutionize e-learning with our Udemy clone. Seamlessly authenticate users, process payments, support multilingual content, and integrate AI for enhanced learning experiences',
		tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
		featured: true,
		category: 'Full Stack',
	},
	{
		id: 2,
		title: 'Tech blog',
		githubUrl: 'https://github.com/frontend-tester02/shokh-blog',
		demoUrl: 'https://tech.shoky.dev/',
		image: '/images/tech-blog.png',
		description:
			'Tech blog is a personal tech journal by Nuriddinov Shokhrukh, where ideas meet code. Here, you’ll find insightful articles on the latest technology trends, programming tutorials, and personal reflections — crafted for developers, tech enthusiasts, and curious minds. From AI discussions to TypeScript guides, content is shared in both English and Uzbek to empower a diverse community of learners and creators.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS blog'],
		featured: true,
		category: 'Frontend',
	},
	{
		id: 3,
		title: 'Seleor E-commerce',
		githubUrl: 'https://github.com/frontend-tester02/seleor',
		demoUrl: 'https://seleor.shoky.dev/',
		image: '/images/seleor1.jpg',
		description:
			'Seleor is your go-to online marketplace for everything you need — from the latest tech gadgets to fashion essentials, digital tools, and everyday must-haves. Designed for simplicity and convenience, Seleor connects quality products with smart shoppers. Discover new trends, exclusive deals, and reliable service, all in one place.',
		tags: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
		featured: true,
		category: 'Full Stack',
	},
	{
		id: 4,
		title: 'Signalist - Stock Tracker',
		githubUrl: 'https://github.com/frontend-tester02/signalist-stock-tracker',
		demoUrl: 'https://signalist.shoky.dev/',
		image: '/images/signalist.png',
		description:
			'Track real-time stock prices, get personalized alerts and explore detailed company insights.',
		tags: ['Next.js', 'TypeScript', 'Node.js', 'Better-auth'],
		featured: true,
		category: 'Full Stack',
	},
	{
		id: 5,
		title: 'Spotify Clone',
		githubUrl: 'https://github.com/frontend-tester02/spotify',
		demoUrl: 'https://spotify.shoky.dev/',
		image: '/images/spotify.png',
		description:
			'A modern Spotify-inspired music streaming web app. It features user authentication, playlist management, and real-time audio playback with a clean, responsive UI. ',
		tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
		featured: true,
		category: 'Full Stack',
	},
]

export const journeySteps = [
	{
		year: '2022',
		title: 'Started Coding Journey',
		company: 'Self-taight',
		description: 'Began learning web development with HTML, CSS and JavaScript',
		icon: Code2,
		color: 'bg-blue-500',
	},

	{
		year: '2021',
		title: 'Computer Science degree',
		company: 'Sejong University',
		description:
			'Started honors, specializing in web technologies and software engineering',
		icon: GraduationCap,
		color: 'bg-purple-500',
	},

	{
		year: '2022',
		title: 'First Internship',
		company: 'TechStart Inc.',
		description:
			'Joined as a frontend intern, working with React and learning modern development practices',
		icon: Briefcase,
		color: 'bg-green-500',
	},

	{
		year: '2023',
		title: 'Full Stack Developer',
		company: 'Sammi Inc.',
		description:
			'Promoted to full-time developer role in remote. Built end-to-end appliacations using MERN stack.',
		icon: Rocket,
		color: 'bg-orange-500',
	},

	{
		year: '2025',
		title: 'Freelance',
		company: 'Independent',
		description:
			'Starting freelancing and contiributing to open source projects. Launched different web applications.',
		icon: Award,
		color: 'bg-pink-500',
	},
]

export const passions = [
	{
		icon: Heart,
		title: 'User Experience',
		description: 'Crafting intuitive interfaces that users love',
	},
	{
		icon: Coffee,
		title: 'Problem Solving',
		description: 'Turning complex challenges into elegant solutions',
	},
	{
		icon: BookOpen,
		title: 'Continoues Learning',
		description: 'Always exploring new technologies and best practices',
	},
]

export const socialLinks = [
	{
		name: 'GitHub',
		icon: FiGithub,
		url: '',
		color: 'hover:text-gray-400',
		bgColor: 'hover:bg-gray-800',
	},
	{
		name: 'LinkedIn',
		icon: FiLinkedin,
		url: '',
		color: 'hover:text-blue-400',
		bgColor: 'hover:bg-blue-500/10',
	},
	{
		name: 'Telegram',
		icon: BsTelegram,
		url: '',
		color: 'hover:text-sky-400',
		bgColor: 'hover:bg-sky-500/10',
	},
	{
		name: 'Email',
		icon: Mail,
		url: '',
		color: 'hover:text-green-400',
		bgColor: 'hover:bg-green-500/10',
	},
]

export const contactInfo = [
	{ icon: MapPin, label: 'Location', value: 'Seoul, South Korea' },
	{ icon: Mail, label: 'Email', value: 'shokhrukhnuriddinov@gmail.com' },
	{ icon: Phone, label: 'Phone', value: '+82 10 2115 4633' },
]
