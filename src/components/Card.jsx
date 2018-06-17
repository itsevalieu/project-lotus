import React, { Component } from 'react';
import '../assets/css/Card.css';

class Card extends Component {
	render() {
		return(
			<div id='card' className='card'>
				<div className='card-image'>
					<img src='/' alt=''/>
				</div>
				<div className='card-details'>
					<ul>
						<li><h2>Name: </h2></li>
						<li><p>Type: </p></li>
						<li><p>Brew Time: </p></li>
						<li><p>Benefits: </p></li>
						<li><p>Description: </p></li>			
					</ul>
				</div>
				<div className='card-buttons'>
					<button>COMMENTS</button>
					<button>SAVE FOR LATER</button>
					<button>ADD TO TEA BOX</button>
				</div>
			</div>
		);
	}
};

export default Card;