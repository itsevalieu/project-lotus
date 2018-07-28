import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
	
	render() {
		return(
			<div className='results'>
				<div><p>Search results for: <span id='searchterm'>{this.props.searchterm}</span></p></div>
				<div className='results-cards' id='results'>
					{ this.props.results }
				</div>
			</div>
		);
	}
};

export default Results;