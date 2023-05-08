import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Carte from 'pages/Carte';
import About from 'pages/About';
import Default from 'components/Default';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

export default function Router(){
	return(
		<main className='container'>
			<BrowserRouter>
				<Menu/>
				<Routes>
					<Route path='/' element={<Default/>}>
						<Route index element={<Home/>}/>
						<Route path='carte' element={<Carte/>}/>
						<Route path='about' element={<About/>} />
						<Route path='dish/:id' element={<Dish/>} />
						<Route path='*' element ={<NotFound/>} />
					</Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</main>
	);}