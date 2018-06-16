import React, { Component } from 'react';
import '../assets/css/Search.css';

class Search extends Component {
	render() {
		return(
			<div id='search' className='search'>
				<h3>03. EXPLORE THE WORLD OF TEA</h3>
				<form>
					<p>Build your tea knowledge using our encyclopedia. Add the teas you want to your tea box subscription.</p>
					<span><input type='search' id='searchbar' placeholder='Search teas, herbs, or health benefits...'></input>
					<button >SEARCH</button></span>
				</form>
			</div>
		);
	}
};

export default Search;