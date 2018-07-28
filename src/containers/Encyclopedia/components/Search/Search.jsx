import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	render() {
		return(
			<div id='search' className='search'>
				<h3>EXPLORE THE WORLD OF TEA</h3>
				<form onSubmit={this.props.onSubmitAction}>
					<p>Build your tea knowledge using our encyclopedia. Add the teas you want to your tea box subscription.</p>
					<span>
						<input 
							type='search' 
							name='searchterm' 
							value={this.props.query}
							onChange={this.props.onChangeValue} 
							id='searchbar' 
							placeholder='Search teas, herbs, or health benefits...'
						/>
						<button type='submit'>SEARCH</button>
					</span>
				</form>
			</div>
		);
	}
};

export default Search;