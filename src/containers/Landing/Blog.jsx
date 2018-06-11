import React, { Component } from 'react';
import '../../assets/css/Blog.css';

class BlogModule extends Component {
	
	render() {
		return(
			<div className='blog-module'>
				<div className='blog-module-textbox'>
					<form>
						<h2>Follow our blog!</h2>
						<p>Discover our tea lifestyle.</p>
						<button>Subscribe</button>
					</form>
				</div>
				<div className='blog-module-img'>
					<img src='../../assets/images/annie-spratt.jpg' alt='blog'/>
				</div>
			</div>
		);
	}
};

export default BlogModule;