import "./Results.scss";
import resultPic from "../../../../assets/images/grid-tea.png";

const Results = (props) => {
  if (!props.results.length) {
    return (
      <div
        className="waitingResults"
        style={{ textAlign: "center", background: "#eee" }}
      >
        <h3>
          Did you know all traditional teas come from a single plant? It's
          called camellia sinesis!
        </h3>
        <img
          src={resultPic}
          alt="placeholder"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </div>
    );
  } else {
    return (
      <div className="results">
        <div>
          <p>
            Search results for: <span id="searchterm">{props.query}</span>
          </p>
        </div>
        <div className="results-cards" id="results">
          {props.results}
        </div>
      </div>
    );
  }
};

export default Results;
