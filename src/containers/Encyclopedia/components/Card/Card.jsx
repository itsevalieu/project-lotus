import React, { Component } from "react";
import "./Card.scss";
import tea from "../../../../assets/images/tea/jasmine pearl.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // 	 id: 0,
    // 	name: 'name',
    // 	type: 'type',
    // 	brew_time: 'brew time',
    // 	benefits: ['benefits', 'benefits'],
    // 	description: 'description',
    // 	image_url: '',
    // 	image_alt: '',
    // 	saved: false,
    // 	added_to_box: false,
    // 	open_comments: false
    // // }
    // 	<li><h2>Name: {this.state.name}</h2></li>
    // 	<li><p>Type:  {this.state.type}</p></li>
    // 	<li><p>Brew Time:  {this.state.brew_time}</p></li>
    // 	<li><p>Benefits:  {this.state.benefits}</p></li>
    // 	<li><p>Description:  {this.state.description}</p></li>
  }
  render() {
    return (
      <div id="card" className="card">
        <div className="card-image">
          <img src={tea} alt="Jasmine Pearl" />
        </div>
        <div className="card-details">
          <ul>
            <li>
              <h3>Name: {this.props.data.cell}</h3>
            </li>
            <li>
              <p>Type: {this.props.results}</p>{" "}
              <p>Brew Time: {this.props.results}</p>
            </li>
            <li>
              <p>Benefits: {this.props.results}</p>
            </li>
            <li>
              <p>{this.props.results}</p>
            </li>
          </ul>
        </div>
        <div className="card-buttons">
          <div className="button-comment"></div>
          <div className="button-add"></div>
        </div>
        <div className="button-bookmark"></div>
      </div>
    );
  }
}

export default Card;
