import React, { PropTypes, Component } from "react";
import "../../assets/css/App/header.css";
import brand_logo from "../../assets/icons/teafo.png";
import hamburger from "../../assets/icons/hamburger.png";

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {sidebar: false};
		this.openSidebar = this.openSidebar.bind(this);
	}
	render() {
		return(
			<header>
				<div>
					<a href="/" id="brand-logo">
						<img src={ brand_logo } alt="#" />
					</a>	
				</div>
				<div>
					<a href="/" id="brand-name">teafographic</a>
				</div>
				<div className="header-links">
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/index">Index</a>
					<a href="#">Login</a>
				</div>
				<div className="header-hamburger">
					<a href="#" onClick={this.openSidebar}>
						<img src={ hamburger } alt="#" />
					</a>
				</div>
			</header>	
		);
	}
	openSidebar(e){
		e.preventDefault();
		console.log("Cat.");
		this.setState(prevState => ({sidebar: !prevState.sidebar}));
		console.log(this.state.sidebar);
		if(this.state.sidebar === true) {
			document.getElementById("sidebar").style.display = "block";
		} else {
			document.getElementById("sidebar").style.display = "none";			
		}
	}
};

export default Header;

//need to reuse header, change the login/to logout? or maybe settings...? Or Account