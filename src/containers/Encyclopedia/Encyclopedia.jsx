import { useState } from "react";
import "./Encyclopedia.scss";
import Search from "./components/Search/Search.jsx";
import Results from "./components/Results/Results.jsx";
import Card from "./components/Card/Card.jsx";
import axios from "axios";

const Encyclopedia = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchTeaByType = (query) => {
    axios(`https://tea-db.herokuapp.com/api/${query}`).then(({ data }) => {
      let typeData = data.data;
      let results = typeData.map((tea) => {
        return <Card tea={tea} key={tea._id} />;
      });
      setResults(results);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let quickQuery = e.target.dataset.value;
    setQuery(quickQuery);
    fetchTeaByType(quickQuery);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);

    //TODO: Currently returns all the data, I want to the query do the
    //search on server and send back the filtered results
    axios(`https://tea-db.herokuapp.com/api`).then(({ data }) => {
      let filteredData = filterData(data.data, query);
      filteredData.sort();

      let results = filteredData.map((tea) => {
        return <Card tea={tea} key={tea._id} />;
      });
      setResults(results);
    });

    document.getElementById("searchbar").value = "";
  };

  const filterData = (dataArray, query) => {
    return dataArray.filter((tea) => {
      let name = tea.name;
      return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  };

  return (
    <div id="encyclopedia">
      <Search
        value={query}
        handleClick={handleClick}
        onChangeValue={handleChange}
        onSubmitAction={handleSubmit}
      />
      <Results results={results} query={query} />
    </div>
  );
};

export default Encyclopedia;
