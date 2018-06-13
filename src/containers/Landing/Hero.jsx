import React, { Component } from 'react';
import '../../assets/css/Hero.css';

class Hero extends Component {
	render() {
		return(
			<div id='hero'>
				<div className='hero-textbox'>
					<h2>Get Started With Tea</h2>
					<p>Use our encyclopedia to learn more about which teas suit your skin and health needs best!</p>
					<button>SUBSCRIBE</button>			
				</div>
			</div>
		);
	}
};

export default Hero;