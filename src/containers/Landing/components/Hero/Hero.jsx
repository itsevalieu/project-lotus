import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
	render() {
		return(
			<div id='hero'>
				<div className='hero-textbox'>
					<h1>Get Started With Tea</h1>
					<p>Customize your tea box subscription using our encyclopedia. Explore which teas suit your skin and health needs best.</p>
					<button><a href='learn' target='_blank'>LEARN MORE</a></button>			
				</div>
			</div>
		);
	}
};

export default Hero;