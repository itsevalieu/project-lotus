import React from 'react';
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom';
import App from './containers/App/App.js';
import Landing from './containers/Landing/Landing.jsx';
import About from './containers/Pages/components/About/About.jsx';
import Encyclopedia from './containers/Encyclopedia/Encyclopedia.jsx';
import Billing from './containers/Landing/components/Billing/Billing.jsx';
import Login from './containers/Pages/components/Login';
import Register from './containers/Pages/components/Register';
import Careers from './containers/Pages/components/Careers';
// import Blog from './containers/Pages/Blog';
import Terms from './containers/Pages/components/Terms';
import Privacy from './containers/Pages/components/Privacy';
import Guidelines from './containers/Pages/components/Guidelines';

const routes = (
	<Router>
		<App>
			<Route exact path='/' component={ Landing } />
			<Route exact path='/about' component={ About } />
			<Route exact path='/encyclopedia' component={ Encyclopedia } />
			<Route exact path='/learn' component={ About } />
			<Route exact path='/billing' component={ Billing } />
			<Route exact path='/login' component={ Login } />
			<Route exact path='/register' component={ Register } />
			<Route exact path='/careers' component={ Careers } />
					
			<Route exact path='/terms' component={ Terms } />
			<Route exact path='/privacy' component={ Privacy } />
			<Route exact path='/guidelines' component={ Guidelines } />
		</App>
	</Router>
);

export default routes;