import React, { Component } from 'react';
import './Card.css';
import tea from '../../../../assets/images/tea/jasmine pearl.jpg';

class Card extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	id: 0,
	    	name: 'name',
	    	type: 'type',
	    	brew_time: 'brew time',
	    	benefits: ['benefits', 'benefits'],
	    	description: 'description',
	    	image_url: '',
	    	image_alt: '',
	    	saved: false,
	    	added_to_box: false,
	    	open_comments: false
	    };
	}
	render() {
		return(
			<div id='card' className='card'>

				<div className='card-image'>
					<img src={tea} alt='Jasmine Pearl'/>
				</div>
				<div className='card-details'>
					<ul>
						<li><h2>Name: {this.state.name}</h2></li>
						<li><p>Type:  {this.state.type}</p></li>
						<li><p>Brew Time:  {this.state.brew_time}</p></li>
						<li><p>Benefits:  {this.state.benefits}</p></li>
						<li><p>Description:  {this.state.description}</p></li>			
					</ul>
				</div>
				<div className='card-buttons'>
					<div className='button-comment'></div>
					<div className='button-add'></div>
				</div>
				<div className='button-bookmark'></div>
			</div>
		);
	}
};

export default Card;