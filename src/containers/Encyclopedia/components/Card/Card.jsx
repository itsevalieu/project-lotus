import "./Card.scss";
require("dotenv").config();

const Card = ({ tea }) => {
  // console.log("card", tea);
  let teaImage = `${process.env.REACT_APP_TEA_IMAGE}/${tea.handle}.jpg`;
  let benefits = tea.benefits.map((benefit, index) => {
    if (index === tea.benefits.length - 1) {
      return benefit;
    } else {
      return benefit + ", ";
    }
  });
  let brew = "";
  if (tea.brew === 0) {
    brew = "Stir/Whisk";
  } else {
    brew = ` Brew ${tea.brew} mins`;
  }
  return (
    <div id="card" className="card" data-id={tea._id}>
      <div className="card-image">
        <img src={teaImage} alt={tea.name} />
      </div>
      <div className="card-details">
        <ul>
          <li>
            <h3>{tea.name}</h3>
          </li>
          <li>
            <p>
              Type: {tea.type + ","} {brew}
            </p>
          </li>
          <li>
            <p>Benefits: {benefits}</p>
          </li>
          <li>
            <p className="textflow">{tea.description}</p>
          </li>
        </ul>
      </div>
      {/* <div className="card-buttons">
        <div className="button-comment"></div>
        <div className="button-add"></div>
      </div>
      <div className="button-bookmark"></div> */}
    </div>
  );
};

export default Card;
