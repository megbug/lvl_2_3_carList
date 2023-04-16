
import { Link } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarList from './components/CarList';
import CarDetailPage from './pages/CarDetailPage';

function App() {
	return (
		<div className="App">
			<h1>SuperCarlist</h1>
			<Link className='homeLink' to='/'>Home</Link>
			<Routes >
				<Route path='/' element={<CarList />} />
				<Route path='/:label' element={<CarDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
