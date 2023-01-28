import { Routes, Route } from 'react-router-dom'
import Layout from '@components/Layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'
import Footer from '@pages/Footer'

const Routing: React.FC = () => {
	return (
		<>
			<Layout />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}
export default Routing
