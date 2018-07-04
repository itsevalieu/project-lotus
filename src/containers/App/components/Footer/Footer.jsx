import React, { Component } from 'react';
import './Footer.css';
import pinterest_logo from '../../../../assets/icons/pinterest-logo.png';
import facebook_logo from '../../../../assets/icons/facebook-logo.png';
import instagram_logo from '../../../../assets/icons/instagram-logo.png';
import twitter_logo from '../../../../assets/icons/twitter-logo.png';

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
						<li><a href='/about'>About Us</a></li>
						<li><a href='/jobs'>Careers</a></li>
						<li><a href='/blog'>Our Blog</a></li>
					</ul>
					<ul>
						<li><p>Social</p></li>
						<span id='connect'>
							<li><a href='/'><img src={facebook_logo} alt='facebook-url'/></a></li>
							<li><a href='/'><img src={instagram_logo} alt='instagram-url'/></a></li>
							<li><a href='/'><img src={twitter_logo} alt='twitter-url'/></a></li>
							<li><a href='/'><img src={pinterest_logo} alt='pinterest-url'/></a></li>
						</span>
						<li><p>© 2018 EVA LIEU</p></li>
					</ul>
				</div>
	        </footer>
        );
	}
};

export default Footer;
// <form>
// 	<label for='newsletter'><p>Join Our Newsletter</p></label>
// 	<input id='newsletter' name='newsletter' type='email' placeholder='Email Address'></input>
// 	<input id='newsletter-submit' type='submit'></input>
// </form>