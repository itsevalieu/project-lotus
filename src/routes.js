import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Landing from './Landing.jsx';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Encyclopedia from './Encyclopedia.jsx';
import Shop from './Shop.jsx';

export default () => {
	return(
		<Route path='/' component={ App }>
			<IndexRoute component={ Landing } />
			<Route path="/about" component={ About } />
			<Route path="/blog" component={ Blog } />
			<Route path="/encyclopedia" component={ Encyclopedia } />
			<Route path="/shop" component={ Shop } />			
		</Route>
	);
};
