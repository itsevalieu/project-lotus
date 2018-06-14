import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div>
					<ul>
						<li><p>Teafographic</p></li>
						<li><a href='/terms'>Terms of Use</a></li>
						<li><a href='/privacy'>Privacy Policy</a></li>
						<li><a href='/guidelines'>Guidelines</a></li>
					</ul>
					<ul>
						<li><p>Company</p></li>
						<li><a href='/about'>About</a></li>
						<li><a href='/jobs'>Jobs</a></li>
						<li><a href='/blog'>Blog</a></li>
					</ul>
					
					<ul>
						<li><p>Social</p></li>
						<li><a href='/'><img src='../../assets/icons/fb-logo.png' alt='facebook-url'/></a></li>
						<li><a href='/'>Instagram</a></li>
						<li><a href='/'>Pinterest</a></li>
						<li><a href='/'><img src='../../assets/icons/twitter-logo.png' alt='twitter-url'/></a></li>
						<li><a href='/'>Blog</a></li>
					</ul>
				</div>
	        </footer>
        );
	}
};

export default Footer;