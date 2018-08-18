import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
	
	render() {
		if(!this.props.results.length) {
			return <div style={{textAlign: 'center', background: '#eee', height: '100px', padding: '25px'}}>Did you know all traditional teas come from a single plant? It's called camellia sinesis!</div>;
		}
		return(
			<div className='results'>
				<div><p>Search results for: <span id='searchterm'>{this.props.query}</span></p></div>
				<div className='results-cards' id='results'>
					{ this.props.results }
				</div>
			</div>
		);
	}
};

export default Results;