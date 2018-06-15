import React, { Component } from 'react';
import '../../assets/css/Billing.css';
import icon1 from '../../assets/icons/icons8-Calendar 1.png';
import icon3 from '../../assets/icons/icons8-Calendar 3.png';
import icon6 from '../../assets/icons/icons8-Calendar 6.png';
import icon12 from '../../assets/icons/icons8-Calendar 12.png';

class Billing extends Component {
	
	render() {
		return(
			<div>
				<p>02. CHOOSE YOUR BILLING PLAN</p>
				<div id='billing-module'>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Monthly</h2>
							<p>Pay your subscription plan every month!</p>
						</div>
					</button>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Quarterly</h2>
							<p>Pay your plan every three months!</p>
						</div>
					</button>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
							<h2>Semi-Yearly</h2>
							<p>Pay your plan every six months!</p>				
						</div>
					</button>
					<button>
						<img src='' alt=''/>
						<div className='textbox'>
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