
import React, { useState } from "react";

export interface Prop {
    searchValue : string;
    saveTermSearch : (arg: string[]) => void; 
    previousTerm : string[];
  }

const SearchBar = ({searchValue, saveTermSearch, previousTerm} : Prop ) => {
  const [inputText, setInputText] = useState('');

  function getInputText (e : React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }

  function onHandleSearch () {
    const newTerm = [...previousTerm, inputText]

    saveTermSearch(newTerm);
    setInputText('')
  }
  return (
    <div>
      <div className="search-container content-center">
        <label htmlFor="Search">
          <input onChange={getInputText} type="text" placeholder={searchValue} value={inputText} />
        </label>
        <button onClick={onHandleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
