import React, { Component } from 'react';
import Hero from './Hero.jsx';
import Product from './Product.jsx';
import Billing from './Billing.jsx';
import Search from '../../components/Search.jsx';
import '../../assets/css/Landing.css';

class Landing extends Component {
	render() {
		return(
			<div className='landing'>
				<Hero/>
				<Product/>
				<Billing/>
				<Search/>
			</div>
		);
	}
}

export default Landing;