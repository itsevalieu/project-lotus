import React, { Component } from 'react';
import Hero from './Hero.jsx';
import ProductsModule from './ProductsModule.jsx';
import ShopModule from './Shop.jsx';

class Landing extends Component {
	render() {
		return(
			<div>
				<Hero/>
				<ProductsModule/>
				<ShopModule/>
			</div>
		);
	}
}

export default Landing;