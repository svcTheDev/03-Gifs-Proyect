import React from "react";

interface Prop {
    searchValue : string;
  }

const SearchBar = ({searchValue} : Prop) => {
  return (
    <div>
      <div className="search-container content-center">
        <label htmlFor="Search">
          <input type="text" placeholder={searchValue}/>
        </label>
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
