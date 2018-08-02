import React, { Component } from 'react';
import './Encyclopedia.css';
import './components/Card/Card.css';
import Search from './components/Search/Search.jsx';
import Results from './components/Results/Results.jsx';
import axios from 'axios';

class Encyclopedia extends Component {
	constructor() {
		super();
		this.state = {
			query: '',
			results: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			query: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.query);
		document.getElementById('searchbar').value = '';
	}
	componentDidMount() {
		// fetch('https://tea-db.herokuapp.com/api')
		// .then(res => res.json())
		// .then(data => {
		axios(`https://tea-db.herokuapp.com/api`)
		.then(({data}) => {
			console.log('data', data.data);
			let results = data.data.map((tea, index) => {
				return(
					<div id='card' className='card' key={index}>
						<div className='card-image'>
							<img src={tea.imageUrl} alt={tea.name}/>
						</div>
						<div className='card-details'>
							<ul>
								<li><h2>Name: {tea.name}</h2></li>
								<li><p>Type:  {tea.type}</p></li>
								<li><p>Brew Time:  {tea.brew}</p></li>
								<li><p>Benefits:  {tea.benefits}</p></li>
								<li><p>Description:  {tea.description}</p></li>			
							</ul>
						</div>
						<div className='card-buttons'>
							<div className='button-comment'></div>
							<div className='button-add'></div>
						</div>
						<div className='button-bookmark'></div>
					</div>
				);
			});
			this.setState({results: results});
		});
	}
	
	render() {
		return(
			<div id='encyclopedia'>
				<Search value={this.state.query} onChangeValue={this.handleChange} onSubmitAction={this.handleSubmit}/>
				<Results results={this.state.results} query={this.state.query}/>
			</div>
		);
	}
};

export default Encyclopedia;

// {
// 	{
// 		"id": 1,
// 		"name": "Jasmine Tea"
// 		"type": "Green",
//     	"brew_time": "2 mins",
//     	"benefits": ["Antioxidants"],
//     	"description": "Green tea infused with jasmine flowers.",
//     	"saved": false,
//     	"added_to_box": false,
//     	"open_comments": false
// 	},


// }