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
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.filterData = this.filterData.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		let quickQuery = e.target.dataset.value;
		axios(`https://tea-db.herokuapp.com/api/${quickQuery}`)
		.then(({data}) => {
			let typeData = data.data;
			let results = typeData.map((tea, index) => {
				let benefits = tea.benefits.map((benefit, index) => {
					if(index === tea.benefits.length - 1) {
						return(benefit)
					} else {
						return(benefit + ', ')
					}
				});
				let brew = '';
				if (tea.brew === 0) {
					brew = 'Stir/Whisk';
				} else {
					brew = ` Brew ${tea.brew} mins`;
				}
				var teaImage = `./tea/${tea.handle}.jpg`;
				
				return(
					<div id='card' className='card' key={index} data-id={tea._id}>
						<div className='card-image'>
							<img src={teaImage} alt={tea.name}/>
						</div>
						<div className='card-details'>
							<ul>
								<li><h3>{tea.name}</h3></li>
								<li><p>Type: {tea.type + ','} {brew}</p></li>
								<li><p>Benefits:  {benefits}</p></li>
								<li><p className='textflow'>{tea.description}</p></li>			
							</ul>
						</div>
						{/* <div className='card-buttons'>
							<div className='button-comment'></div>
							<div className='button-add'></div>
						</div> */}
						{/* <div className='button-bookmark'></div> */}
					</div>
				);
			});
			this.setState({results: results});
		});
	}
	handleChange(e) {
		this.setState({
			query: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.query);
		axios(`https://tea-db.herokuapp.com/api`)
		.then(({data}) => {
			let filteredData = this.filterData(data.data, this.state.query);
			filteredData.sort();
			let results = filteredData.map((tea, index) => {
				let benefits = tea.benefits.map((benefit, index) => {
					if(index === tea.benefits.length - 1) {
						return(benefit)
					} else {
						return(benefit + ', ')
					}
				});
				let brew = '';
				if (tea.brew === 0) {
					brew = 'Stir/Whisk';
				} else {
					brew = ` Brew ${tea.brew} mins`;
				}
				return(
					<div id='card' className='card' key={index} data-id={tea._id}>
						<div className='card-image'>
							<img src={tea.imageUrl} alt={tea.name}/>
						</div>
						<div className='card-details'>
							<ul>
								<li><h3>{tea.name}</h3></li>
								<li><p>Type: {tea.type + ','} {brew}</p></li>
								<li><p>Benefits:  {benefits}</p></li>
								<li><p className='textflow'>{tea.description}</p></li>			
							</ul>
						</div>
						{/* <div className='card-buttons'>
							<div className='button-comment'></div>
							<div className='button-add'></div>
						</div> */}
						{/* <div className='button-bookmark'></div> */}
					</div>
				);
			});
			this.setState({results: results});
		});
		document.getElementById('searchbar').value = '';

	}
	filterData(dataArray, query) {
		return dataArray.filter((tea) => {
			let name = tea.name;
			return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	}
	componentDidMount() {
		// fetch('https://tea-db.herokuapp.com/api')
		// .then(res => res.json())
		// .then(data => {
		// axios(`https://tea-db.herokuapp.com/api`)
		// .then(({data}) => {
		// 	let filteredData = this.filterData(data.data, this.state.query);
		// 	let results = filteredData.map((tea, index) => {
		// 		return(
		// 			<div id='card' className='card' key={index}>
		// 				<div className='card-image'>
		// 					<img src={tea.imageUrl} alt={tea.name}/>
		// 				</div>
		// 				<div className='card-details'>
		// 					<ul>
		// 						<li><h2>Name: {tea.name}</h2></li>
		// 						<li><p>Type:  {tea.type}</p></li>
		// 						<li><p>Brew Time:  {tea.brew}</p></li>
		// 						<li><p>Benefits:  {tea.benefits}</p></li>
		// 						<li><p>Description:  {tea.description}</p></li>			
		// 					</ul>
		// 				</div>
		// 				<div className='card-buttons'>
		// 					<div className='button-comment'></div>
		// 					<div className='button-add'></div>
		// 				</div>
		// 				<div className='button-bookmark'></div>
		// 			</div>
		// 		);
		// 	});
		// 	this.setState({results: results});
		// });
	}
	
	render() {
		return(
			<div id='encyclopedia'>
				<Search value={this.state.query} handleClick={this.handleClick} onChangeValue={this.handleChange} onSubmitAction={this.handleSubmit}/>
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