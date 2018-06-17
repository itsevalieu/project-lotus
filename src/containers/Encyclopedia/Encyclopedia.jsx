import React, { Component } from 'react';
import '../../assets/css/Encyclopedia.css';
import Search from '../../components/Search.jsx';
import Results from '../../components/Results.jsx';

class Encyclopedia extends Component {
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