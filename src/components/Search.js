import React from "react";

function Search({ searchTerm, updateSearchTerm }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
