import React, { Component } from 'react';
import '../../assets/css/Hero.css';

class Hero extends Component {
	render() {
		return(
			<div id='hero'>
				<div className='hero-textbox'>
					<h2>Get Started With Tea</h2>
					<p>Customize your tea box subscription using our encyclopedia. Explore which teas suit your skin and health needs best.</p>
					<button>LEARN MORE</button>			
				</div>
			</div>
		);
	}
};

export default Hero;