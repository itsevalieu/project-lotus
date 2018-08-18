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
				<div id='quicksearch'>
				<p>Quick Search:</p>
					<a href='' className='quicksearch' data-value='black' onClick={this.props.handleClick}>Black</a>
					<a href='' className='quicksearch' data-value='green' onClick={this.props.handleClick}>Green</a>
					<a href='' className='quicksearch' data-value='white' onClick={this.props.handleClick}>White</a>
					<a href='' className='quicksearch' data-value='oolong' onClick={this.props.handleClick}>Oolong</a>
					<a href='' className='quicksearch' data-value='puerh' onClick={this.props.handleClick}>Pu-erh</a> 
					<a href='' className='quicksearch' data-value='herbal' onClick={this.props.handleClick}>Herbal</a>
					<a href='' className='quicksearch' data-value='fruitblend' onClick={this.props.handleClick}>Fruit Blend</a> 
				</div>
			</div>
		);
	}
};

export default Search;