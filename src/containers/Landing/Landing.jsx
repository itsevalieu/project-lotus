import React, { Component } from 'react';
import Hero from './Hero.jsx';
import Product from './Product.jsx';
import Billing from './Billing.jsx';

class Landing extends Component {
	render() {
		return(
			<div>
				<Hero/>
				<Product/>
				<Billing/>
			</div>
		);
	}
}

export default Landing;