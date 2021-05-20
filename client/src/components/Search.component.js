import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="searchContainer">
      <div className="search-wrapper">
        <div className="searchBox">
          <label className="searchLabel searchText">Введите город: </label>
          <br></br>
          <input
            className="search"
            onChange={(e) => props.setFilter(e.target.value)}
            name="name"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
