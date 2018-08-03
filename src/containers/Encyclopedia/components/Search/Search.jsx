import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	render() {
		return(
			<div id='search' className='search'>
				<h2>Explore the World of Tea</h2>
				<form onSubmit={this.props.onSubmitAction}>
					<p>Build your tea knowledge using our tea and herb encyclopedia. <br/> Try searching for different types of green, black, white, or oolong tea!</p>
					<span>
						<input 
							type='search' 
							name='searchterm' 
							value={this.props.query}
							onChange={this.props.onChangeValue} 
							id='searchbar' 
							placeholder='Search teas or herbs...'
						/>
						<button type='submit'>SEARCH</button>
					</span>
				</form>
			</div>
		);
	}
};

export default Search;