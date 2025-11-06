import SearchBar from "./gifs/components/SearchBar";
import {Prop} from "./gifs/components/SearchBar";
import CustomHeader from "./shared/components/CustomHeader";
import PreviousSearches from "./gifs/components/PreviousSearches";
import Gifs from "./gifs/components/Gifs";
import { mockGifs } from "./gifs.mock/gifs.mock";

import "./index.css";
import { useState } from "react";

const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState<Prop['previousTerm']>([]);


  function handleSearch(query: string[]) {
    // console.log(query[0]);
    if (query[0] === '') {
      return;
    }
    setPreviousTerm(query);
    console.log(previousTerm);
  }

  function handleTermClicked(previous : string[]) {
    console.log(previous);
  }


  return (
    <>
      <CustomHeader
        title={"Buscador de gifs"}
        description={"Descubre y comparte el gif perfect"}
      />
      <SearchBar searchValue={"Buscar gifs"} handleSearch={handleSearch} previousTerm={previousTerm} />
      <PreviousSearches searches={previousTerm} handleTermClicked={handleTermClicked}/>
      <Gifs gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
