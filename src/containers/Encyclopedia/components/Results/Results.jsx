import React, { Component } from 'react';
import './Results.css';
import resultPic from '../../../../assets/images/grid-tea.png';

class Results extends Component {
	
	render() {
		if(!this.props.results.length) {
			return(
				<div className='waitingResults' style={{textAlign: 'center', background: '#eee'}}>
					<h3>Did you know all traditional teas come from a single plant? It's called camellia sinesis!</h3>
					<img src={resultPic} alt='placeholder' style={{height: '100%', width: '100%'}}></img>
				</div>
			);
		} else {
			return(
				<div className='results'>
					<div><p>Search results for: <span id='searchterm'>{this.props.query}</span></p></div>
					<div className='results-cards' id='results'>
						{ this.props.results }
					</div>
				</div>
			);
		}
	}
};

export default Results;