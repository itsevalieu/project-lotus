import React, { Component } from 'react';
import "../assets/css/Sidebar.css";

class Sidebar extends Component {
	render() {
		return(
			<div className="sidebar" id="sidebar">
				<div className="cat">
					<a href="/learn">How it Works</a>
					<a href="/encyclopedia">Encyclopedia</a>
					<a href="/login">Login</a>
				</div>
			</div>
		);
	}
};

export default Sidebar;