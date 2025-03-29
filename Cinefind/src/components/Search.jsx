import React from "react";

export const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./src/assets/search.svg" alt="Search Logo" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          // id="1"
          // name="name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
