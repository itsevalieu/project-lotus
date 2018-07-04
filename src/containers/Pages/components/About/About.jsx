import React, { Component } from 'react';
import './About.css';

class About extends Component {
	
	render() {
		return(
			<div className='about'>
				<div className='side'>
					<div className='link-name'>
						<h2>About Us</h2>
					</div>
					<div className='link-description'>
						<p> Learn more about Teafographic Lifestyle! We're all about that zen living!</p>
					</div>
				</div>
				<div className='article'>
					<div className='image-box'>
						<img src='../assets/images/agap.jpg' alt=''/>
					</div>
					<div className='title-box'>
						<h2>Team</h2>
					</div>
					<div className='description-box'>
						<p>Eva Lieu - Web developer</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni fugit, quidem autem reiciendis impedit totam obcaecati mollitia facere asperiores nulla esse dolorum sed voluptas quam pariatur alias odio quasi.</p>
					</div>
				</div>
			</div>
		);
	}

}

export default About;
//hero
	//h1 title: about teafographic
	//p description paragraph long about lifestyle
// team
// blog
// products and/or tea farms
