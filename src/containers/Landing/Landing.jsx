import React, { Component } from 'react';
import Hero from './Hero.jsx';
import BlogModule from './Blog.jsx';
import PackageModule from './Package.jsx';
import ShopModule from './Shop.jsx';
// import AdModule from './Ad.jsx';

class Landing extends Component {
	render() {
		return(
			<div>
				<Hero/>
				<PackageModule/>
				<ShopModule/>
			
				<BlogModule/>
			</div>
		);
	}
}

export default Landing;