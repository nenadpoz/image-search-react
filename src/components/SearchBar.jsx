import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const onSubmitForm = e => {
    e.preventDefault();
    onSearch(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={e => onSubmitForm(e)}>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
