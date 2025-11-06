
import React, { useEffect, useRef, useState } from "react";

export interface Prop {
    searchValue : string;
    handleSearch : (arg: string[]) => void; 
    previousTerm : string[];
  }

const SearchBar = ({searchValue, handleSearch, previousTerm} : Prop ) => {
  const [inputText, setInputText] = useState('');

  const onKeyDownSearch = (e : React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onQuery();
      }
  }

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onQuery();
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    }

  }, [inputText])


  function onQuery () { 
    if (inputText !== '') {
      setInputText.lowercase();

      const newTerm = [...previousTerm, inputText]
      handleSearch(newTerm);
    }

    setInputText('')
  }

  
  return (
    <div>
      <div className="search-container content-center">
        <label htmlFor="Search">
          <input onKeyDown={onKeyDownSearch}  onChange={(e) => setInputText(e.target.value) } type="text" placeholder={searchValue} value={inputText} />
        </label>
        <button onClick={onQuery}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
