import "./App.css";

import React, { useState } from "react";

import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";

function App() {
  const [resultFromApi, setResultFromApi] = useState({});
  const onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos/", {
      params: {
        query: term
      }
    });

    setResultFromApi(response.data);
  };
  return (
    <div className="App">
      <SearchBar onSearch={onSearchSubmit}></SearchBar>
      {resultFromApi.results ? (
        <ImageList list={resultFromApi.results} />
      ) : null}
    </div>
  );
}

export default App;
