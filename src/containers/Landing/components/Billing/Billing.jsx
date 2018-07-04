import React, { Component } from 'react';
import './Billing.css';
import icon1 from '../../../../assets/icons/icons8-Calendar 1.png';
import icon3 from '../../../../assets/icons/icons8-Calendar 3.png';
import icon6 from '../../../../assets/icons/icons8-Calendar 6.png';
import icon12 from '../../../../assets/icons/icons8-Calendar 12.png';

class Billing extends Component {
	
	render() {
		return(
			<div className='billing'>
				<div><h3>CHOOSE YOUR BILLING PLAN</h3></div>
				<div className='billing-buttons'>
					<button>
						<img src={icon1} alt=''/>
						<div className='billing-buttons-text'>
							<h2>Monthly</h2>
							<p>Pay your subscription plan every month for 12 payments total.</p>
						</div>
					</button>
					<button>
						<img src={icon3} alt=''/>
						<div className='billing-buttons-text'>
							<h2>Quarterly</h2>
							<p>Pay your plan every three months for 4 payments total.</p>
						</div>
					</button>
					<button>
						<img src={icon6} alt=''/>
						<div className='billing-buttons-text'>
							<h2>Semi-Yearly</h2>
							<p>Pay your plan every six months for 2 payments total.</p>				
						</div>
					</button>
					<button>
						<img src={icon12} alt=''/>
						<div className='billing-buttons-text'>
							<h2>Yearly</h2>
							<p>Make a one-time payment for a whole year!</p>
						</div>
					</button>
				</div>
			</div>
		);
	}
	
}

export default Billing;