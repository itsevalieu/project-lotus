import React, { Component } from "react";
import "./Product.scss";
import image1 from "../../../../assets/images/thought.jpg";
import image2 from "../../../../assets/images/carolyn.jpg";
import image3 from "../../../../assets/images/brigitte.jpg";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div>
          <h2>Choose Your Subscription</h2>
        </div>
        <div className="product-buttons">
          <button>
            <div className="product-button-image-div">
              <img src={image1} alt="" />
            </div>
            <div className="product-buttons-text">
              <h3>Teafographic Subscription</h3>
              <p>
                A monthly tea box subscription where WE choose the teas for you.
                Surprise!
              </p>
            </div>
          </button>
          <button>
            <div className="product-button-image-div">
              <img src={image2} alt="" />
            </div>
            <div className="product-buttons-text">
              <h3>Seasonal Tea Subscription</h3>
              <p>
                A monthly tea box in which we curate the best teas for you based
                on the season.
              </p>
            </div>
          </button>
          <button>
            <div className="product-button-image-div">
              <img src={image3} alt="" />
            </div>
            <div className="product-buttons-text">
              <h3>Customized Subscription</h3>
              <p>
                A monthly tea box subscription where YOU choose the teas you
                know you want.
              </p>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
// <div className='package-option'>
// 	<h2>Special Occasion Gift</h2>
// 	<p>A one-time purchase where you customize a gift box for your special someone for their special occasion.</p>
// 	<button>START GIFTING</button>
// </div>
