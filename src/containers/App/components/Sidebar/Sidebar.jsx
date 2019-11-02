import React from 'react';
import "./Sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar" id="sidebar">
			<div className="sidebar-links">
				{/* <a href="/learn">HOW IT WORKS</a> */}
				<a href="/encyclopedia">ENCYCLOPEDIA</a>
				{/* <a href="/login">LOG IN</a> */}
			</div>
		</div>
	);
};