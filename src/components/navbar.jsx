import { useState } from 'react'
import { UseTheme } from '../context/theme-context'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'

const Navbar = () => {
	const { theme, toggleTheme } = UseTheme()
	const isDarkMode = theme === 'dark'
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const scrollToSection = sectionId => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
			setIsMenuOpen(false)
		}
	}
	return (
		<Motion.nav
			style={{ opacity: 1 }}
			className={`fixed top-0 w-full z-9999 px-6 py-4 
        ${
					isDarkMode ? 'bg-gray-950/80' : 'bg-gray-50/80'
				} backdrop-blur-md border-b 
    ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
		>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<Motion.div
					whileHover={{ scale: 1.05 }}
					className='flex items-center space-x-2'
				>
					<Code2 size={24} className='text-blue-500' />
					{''}
					<span
						className={`text-lg ml-1 ${
							isDarkMode && 'dark' ? 'text-white' : ''
						}`}
					>
						shoky.dev
					</span>
				</Motion.div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center space-x-8'>
					{['Home', 'Skills', 'Work', 'About', 'Contact'].map(item => (
						<Motion.button
							key={item}
							whileHover={{ y: -2 }}
							onClick={() => scrollToSection(item.toLowerCase())}
							className={`text-sm uppercase tracking-wider transition-colors 
                                        ${
																					isDarkMode
																						? 'text-gray-400 hover:text-white'
																						: 'text-gray-600 hover:text-gray-900'
																				}`}
						>
							{item}
						</Motion.button>
					))}

					<Motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={toggleTheme}
						className={`p-2 rounded-full transition-colors
                                ${
																	isDarkMode
																		? 'text-gray-400 hover:text-white hover:bg-gray-800'
																		: 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
																} `}
					>
						{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
					</Motion.button>
				</div>

				{/* Mobile menu button */}
				<div className='md:hidden flex items-center space-x-4'>
					<Motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => toggleTheme(isDarkMode ? 'light' : 'dark')}
						className={`p-2 rounded-full transition-colors ${
							isDarkMode
								? 'text-gray-400 hover:text-white hover:bg-gray-800'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
						}`}
					>
						{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
					</Motion.button>

					<Motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className={`p-2 rounded-full transition-colors ${
							isDarkMode
								? 'text-gray-400 hover:text-white hover:bg-gray-800'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
						}`}
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</Motion.button>
				</div>
			</div>

			{/* Mobile version */}
			<AnimatePresence>
				{isMenuOpen && (
					<Motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className={`md:hidden mt-4 p-4 rounded-lg ${
							isDarkMode ? 'bg-gray-900' : 'bg-white'
						} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
					>
						{['Home', 'Skills', 'Work', 'About', 'Contact'].map(item => (
							<Motion.button
								key={item}
								whileHover={{ x: 5 }}
								onClick={() => scrollToSection(item.toLowerCase())}
								className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors
                                        ${
																					isDarkMode
																						? 'text-gray-400 hover:text-white'
																						: 'text-gray-600 hover:text-gray-900'
																				}`}
							>
								{item}
							</Motion.button>
						))}
					</Motion.nav>
				)}
			</AnimatePresence>
		</Motion.nav>
	)
}

export default Navbar
