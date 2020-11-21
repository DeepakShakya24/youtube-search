import React, { useEffect, useState } from "react";
import apiSearch from "./api/apiSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

const App = () => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    apiSearch()
      .then((response) => setContent(response.data.items))
      .catch((error) => setError(error.message));
    console.log(error);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const video = e.target.elements.video.value;
    if (video) {
      const fetchData = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=` +
          video +
          `&&type=video&&part=snippet&&key=${process.env.REACT_APP_API_KEY}`
      );
      setContent(fetchData.data.items);
    } else {
      setError("Input some value");
    }
  };
  return (
    <div className="container">
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      <Content content={content} error={error} />
    </div>
  );
};
export default App;
