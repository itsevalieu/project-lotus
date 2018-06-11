import React from 'react';
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom';
import App from './containers/App/App.js';
import Landing from './containers/Landing/Landing.jsx';
import About from './containers/Pages/About.jsx';
import Blog from './containers/Blog/Blog.jsx';
import Encyclopedia from './containers/Encyclopedia/Encyclopedia.jsx';
import Shop from './containers/Shop/Shop.jsx';

const routes = (
	<Router>
		<App>
			<Route exact path='/home' component={ Landing } />
			<Route exact path='/about' component={ About } />
			<Route exact path='/blog' component={ Blog } />
			<Route exact path='/encyclopedia' component={ Encyclopedia } />
			<Route exact path='/shop' component={ Shop } />			
		</App>
	</Router>
);

export default routes;