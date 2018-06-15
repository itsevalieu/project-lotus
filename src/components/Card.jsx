import React, { Component } from 'react';
import '../../assets/css/Card.css';

class Card extends Component {
	render() {
		return(
			<div id='card' className='card'>
				<div>
					<img src='/' alt=''/>
				</div>
				<div>
					<ul>
						<li><h2>Name: </h2></li>
						<li><p>Type: </p></li>
						<li><p>Brew Time: </p></li>
						<li><p>Benefits: </p></li>
						<li><p>Description: </p></li>			
					</ul>
					<div>
						<button>SAVE FOR LATER</button>
						<button>ADD TO TEA BOX</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Card;