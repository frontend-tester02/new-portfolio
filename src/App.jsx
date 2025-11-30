import { ThemeProvider } from './context/theme-context'
import Navbar from './components/navbar'
import Hero from './components/sections/hero'

const App = () => {
	return (
		<ThemeProvider>
			<div>
				<Navbar />
				<Hero />
			</div>
		</ThemeProvider>
	)
}

export default App
