import React, { Component } from "react";
import "../../assets/css/Hero.css";

class Hero extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {slideIndex: 1};
	// 	this.showDivs = this.showDivs.bind(this);
	// 	this.plusDivs = this.plusDivs.bind(this);
	// }
	render() {
		return(
			<div className="hero">
				<div className="slider">
					<img className="slide-images" src="../assets/images/alexandrec.jpg" alt="#"/>
					
				</div>
				<h1>Customizable Tea Subscription</h1>
				<p>Tea infographics, your minimal lifestyle centered around the perfect cup of tea.</p>
				<button>SUBSCRIBE</button>
				
			</div>
		);
	}
	// <img className="slide-images" src="../assets/images/agap.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/annie-spratt.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/brookel.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/coleh.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/hero-img.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/igormiske.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/joanna-kosinska.jpg" alt="#"/>
	// 				<img className="slide-images" src="../assets/images/nevenk.jpg" alt="#"/>
	// <button className="w3-display-left" onClick={this.plusDivs(-1)}>&#10094;</button>
	// 			<button className="w3-display-right" onClick={this.plusDivs(1)}>&#10095;</button>
	// plusDivs(n) {
	// 	showDivs(slideIndex += n);
	// }
	// showDivs(n) {
	// 	let i;
	// 	let x = document.getElementsByClassName("slide-images");
	// 	if (n > x.length) {this.slideIndex = 1}    
	// 	if (n < 1) {this.slideIndex = x.length}
	// 	for (i = 0; i < x.length; i++) {
	// 		x[i].style.display = "none";  
	// 	}
	// 	x[this.slideIndex-1].style.display = "block";  
	// }
};

export default Hero;

//slider images? button?
// Hero should be reuseable. 

//reuse of hero for: blog, landing, about, encyclopedia

//setState? message props sent.