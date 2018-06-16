import React, { Component } from 'react';
import '../assets/css/Header.css';
import site_logo from '../assets/icons/site-logo.png';
import hamburger from '../assets/icons/hamburger.png';

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
					<a href='/' id='site-logo'>
						<img src={ site_logo } alt='#' />
					</a>	
				</div>
				<div>
					<a href='/' id='site-name'>teafographic</a>
				</div>
				<div className='header-links'>
					<a href='/learn'>HOW IT WORKS</a>
					<a href='/encyclopedia'>ENCYCLOPEDIA</a>
					<a href='/login'>LOG IN</a>
					<a href='/register'><button>CREATE ACCOUNT</button></a>
				</div>
				<div className='header-hamburger'>
					<a href='/' onClick={this.openSidebar}>
						<img src={ hamburger } alt='#' />
					</a>
				</div>
			</header>	
		);
	}
	openSidebar(e){
		e.preventDefault();
		console.log('Cat.');
		this.setState(prevState => ({sidebar: !prevState.sidebar}));
		console.log(this.state.sidebar);
		if(this.state.sidebar === true) {
			document.getElementById('sidebar').style.display = 'block';
		} else {
			document.getElementById('sidebar').style.display = 'none';			
		}
	}
};

export default Header;