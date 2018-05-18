import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/package-module.css";
import icon1 from "../../assets/icons/icons8-Calendar 1.png";
import icon3 from "../../assets/icons/icons8-Calendar 3.png";
import icon6 from "../../assets/icons/icons8-Calendar 6.png";
import icon12 from "../../assets/icons/icons8-Calendar 12.png";


class PackageModule extends Component {
	
	render() {
		return(
			<div className="package-module">
				<button>
					<img src={ icon1 }/>
					<h2>Special Occasion</h2>
					<p>One-Time Tea Gift</p>
				</button>
				<button>
					<img src={ icon3 }/>
					<h2>Month Subscription</h2>
					<p>Subscribe for 3 months.</p>
				</button>
				<button>
					<img src={ icon6 }/>
					<h2>Month Subscription</h2>
					<p>Subscribe for 6 months.</p>				
				</button>
				<button>
					<img src={ icon12 }/>
					<h2>Month Subscription</h2>
					<p>Subscribe for 1 year.</p>
				</button>				
			</div>
		);
	}
};

export default PackageModule;