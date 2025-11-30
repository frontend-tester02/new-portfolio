import { delay, useScroll, useTransform } from 'framer-motion'
import { UseTheme } from '../../context/theme-context'

const Hero = () => {
	const { theme } = UseTheme()
	const isDarkMode = theme

	const { scrollY } = useScroll()
	const heroY = useTransform(scrollY, [0, 500], [0, -100])

	const scrollToSection = sectionId => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	}

	const textVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	}

	const imageVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: 'easeOut',
				delay: 0.5,
			},
		},
	}
	return <div>Hero</div>
}

export default Hero
