import React, { Component } from 'react';
import '../../assets/css/Product.css';


class Product extends Component {
	
	render() {
		return(
			<div>
				<p>01. CHOOSE YOUR SUBSCRIPTION</p>
				<div id='products-module'>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Teafographic Subscription</h2>
							<p>A monthly tea box subscription where WE choose the teas for you. Surprise!</p>
						</div>
					</button>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Customized Subscription</h2>
							<p>A monthly tea box subscription where YOU choose the teas you know you want.</p>				
						</div>
					</button>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Seasonal Tea Subscription</h2>
							<p>A monthly tea box in which we curate the best teas for you based on the season.</p>
						</div>
					</button>
				</div>
			</div>
		);
	}
};

export default Product;
// <div className='package-option'>
// 	<h2>Special Occasion Gift</h2>
// 	<p>A one-time purchase where you customize a gift box for your special someone for their special occasion.</p>
// 	<button>START GIFTING</button>
// </div>