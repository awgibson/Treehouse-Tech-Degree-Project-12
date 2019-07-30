// Dependencues
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Redux Actions
import { loadUser } from './actions/authActions';

// App Components
import Navbar from './components/Navbar';
import Results from './components/Results';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// React Strap Components
import { Container } from 'reactstrap';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	render() {
		return (
			<Provider store={store}>
				{/* <div className="container h-100 bg-light"> */}
				<Container className="bg-light mt-3" style={{ minHeight: '800px' }}>
					<Navbar />
					<Results />
				</Container>
			</Provider>
		);
	}
}

export default App;
