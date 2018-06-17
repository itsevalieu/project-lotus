import React, { Component } from 'react';
import '../assets/css/Results.css';
import Card from './Card.jsx';

class Results extends Component {
	render() {
		return(
			<div className='results'>
				<div><p>Search results for:</p></div>
				<div className='results-cards' id='results'>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
		);
	}
};

export default Results;