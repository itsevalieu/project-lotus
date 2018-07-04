import React, { Component } from 'react';
import './Results.css';
import Card from '../Card/Card.jsx';

class Results extends Component {
	render() {
		return(
			<div className='results'>
				<div><p>Search results for: <span id='searchterm'></span></p></div>
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