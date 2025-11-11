import SearchBar from "./gifs/components/SearchBar";
import CustomHeader from "./shared/components/CustomHeader";
import PreviousSearches from "./gifs/components/PreviousSearches";
import Gifs from "./gifs/components/Gifs";
import { mockGifs } from "./gifs.mock/gifs.mock";
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action";
import {Gif} from "./gifs/interfaces/gif.interface"

import "./index.css";
import { useState } from "react";

const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);


  async function handleSearch(query: string) {

      if (!previousTerm.includes(query))  {
        const newTerm = [query,   ...previousTerm].slice(0,8);
        setPreviousTerm(newTerm);
      }

    const gif = await getGifByQuery(query);

    setGifs(gif);
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
      {getGifByQuery}
      <SearchBar searchValue={"Buscar gifs"} handleSearch={handleSearch} />
      <PreviousSearches searches={previousTerm} handleTermClicked={handleTermClicked}/>
      <Gifs gifs={gifs} />
    </>
  );
};

export default GifsApp;
