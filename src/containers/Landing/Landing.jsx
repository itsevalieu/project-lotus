import React, { Component } from 'react';
import Hero from './components/Hero/Hero.jsx';
import Product from './components/Product/Product.jsx';
import Billing from './components/Billing/Billing.jsx';
import './Landing.css';

class Landing extends Component {
	render() {
		return(
			<div className='landing'>
				<Hero/>
				<Product/>
				<Billing/>
			</div>
		);
	}
}

export default Landing;