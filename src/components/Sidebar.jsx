import React, { Component } from 'react';
import "../assets/css/Sidebar.css";

class Sidebar extends Component {
	render() {
		return(
			<div className="sidebar" id="sidebar">
				<div className="sidebar-links">
					<a href="/learn">HOW IT WORKS</a>
					<a href="/encyclopedia">ENCYCLOPEDIA</a>
					<a href="/login">LOG IN</a>
				</div>
			</div>
		);
	}
};

export default Sidebar;