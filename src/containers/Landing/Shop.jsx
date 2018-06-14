import React, { Component } from 'react';
import icon1 from '../../assets/icons/icons8-Calendar 1.png';
import icon3 from '../../assets/icons/icons8-Calendar 3.png';
import icon6 from '../../assets/icons/icons8-Calendar 6.png';
import icon12 from '../../assets/icons/icons8-Calendar 12.png';

class Shop extends Component {
	
	render() {
		return(
			<main className='container'>
				<h2>Shop Page</h2>
				<div>
					<h2>Special Occasion Gift</h2>
					<p>A one-time purchase where you customize a gift box for your special someone for their special occasion.</p>
					<button></button>
				</div>
				<div>
					<h2>Teafographic Subscription</h2>
					<p>A monthly tea box subscription where WE choose the teas for you. Surprise!</p>
					<button></button>
				</div>
				<div>
					<h2>Customized Subscription</h2>
					<p>A monthly tea box subscription where YOU choose the teas you know you want.</p>				
					<button></button>
				</div>
				<div>
					<h2>Seasonal Subscription</h2>
					<p>A monthly tea box in which we curate the best teas for you based on the season.</p>
					<button></button>
				</div>
			</main>
		);
	}
	
}

export default Shop;