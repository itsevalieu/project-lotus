import React, { Component } from 'react';
import '../../assets/css/Package.css';


class PackageModule extends Component {
	
	render() {
		return(
			<div id='package-module'>
				<div>
					<h2>Special Occasion Gift</h2>
					<p>A one-time purchase where you customize a gift box for your special someone for their special occasion.</p>
					<button>START GIFTING</button>
				</div>
				<div>
					<h2>Tea Box Subscription</h2>
					<p>Choose from three different types of monthly tea box subscriptions: basic, customizable, or seasonal.</p>
					<button>SUBSCRIBE</button>
				</div>	
			</div>
		);
	}
};

export default PackageModule;