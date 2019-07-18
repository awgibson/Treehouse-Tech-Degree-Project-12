import React from 'react';
import Navbar from './components/Navbar';
import Results from './components/Results';

import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="container h-100 bg-light">
				<Navbar />
				<Results />
			</div>
		</Provider>
	);
}

export default App;
