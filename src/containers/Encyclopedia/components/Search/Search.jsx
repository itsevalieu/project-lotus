import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			term: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		this.setState({
			term: '',
		});
	}
	render() {
		// const getSearchResults = () => {

		// 	var x = document.getElementById('searchform').name;
		// 	document.getElementById('searchterm').innerHTML = x;
		// }
		return(
			<div id='search' className='search'>
				<h3>EXPLORE THE WORLD OF TEA</h3>
				<form onSubmit={this.handleSubmit} id='searchform' name='search' method='GET' action='/encyclopedia' netlify>
					<p>Build your tea knowledge using our encyclopedia. Add the teas you want to your tea box subscription.</p>
					<span>
						<input type='search' name='searchterm' value={this.state.term} onChange={this.onChange} id='searchbar' placeholder='Search teas, herbs, or health benefits...'></input>
						<button type='submit'>SEARCH</button>
					</span>
				</form>
			</div>
		);
	}
};

export default Search;