import React, { Component } from 'react';
import '../../assets/css/Encyclopedia.css';
import Search from '../../components/Search.jsx';
import Results from '../../components/Results.jsx';

class Encyclopedia extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			results: []
		}
	}
	// onChange(e) {
	// 	this.setState({search: e.target.value});
	// }
	// getResults() {
	// 	calltodb(search).then(e => {
	// 		this.setState({searchResults: e.value});
	// 	});
	// }
	render() {
		return(
			<div id='encyclopedia'>
				<Search/>
				<Results/>
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