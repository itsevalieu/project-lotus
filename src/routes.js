import React from 'react';
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom';
import App from './containers/App/App.js';
import Landing from './containers/Landing/Landing.jsx';
import About from './containers/Pages/About.jsx';
import Encyclopedia from './containers/Encyclopedia/Encyclopedia.jsx';
import Billing from './containers/Landing/Billing.jsx';

const routes = (
	<Router>
		<App>
			<Route exact path='/' component={ Landing } />
			<Route exact path='/about' component={ About } />
			<Route exact path='/encyclopedia' component={ Encyclopedia } />
			<Route exact path='/billing' component={ Billing } />			
		</App>
	</Router>
);

export default routes;