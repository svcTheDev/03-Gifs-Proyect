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

  function saveTermSearch(userText: string[]) {
    // let terms = [];
    setPreviousTerm(userText);
    console.log(previousTerm);
  }

  return (
    <>
      <CustomHeader
        title={"Buscador de gifs"}
        description={"Descubre y comparte el gif perfect"}
      />
      <SearchBar searchValue={"Buscar gifs"} saveTermSearch={saveTermSearch} previousTerm={previousTerm} />
      <PreviousSearches searches={previousTerm} />
      <Gifs gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
