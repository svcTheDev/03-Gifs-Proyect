import SearchBar from "./gifs/components/SearchBar";
import CustomHeader from "./shared/components/CustomHeader";
import PreviousSearches from "./gifs/components/PreviousSearches";
import Gifs from "./gifs/components/Gifs";
import { mockGifs } from "./gifs.mock/gifs.mock";
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action";
import { Gif } from "./gifs/interfaces/gif.interface";
import { useGifs } from "./gifs/hooks/useGifs";

import "./index.css";

const GifsApp = () => {
 
  const {
    previousTerm,
    gifs,
    handleSearch,
    handleTermClicked
  } = useGifs();


  return (
    <>
      <CustomHeader
        title={"Buscador de gifs"}
        description={"Descubre y comparte el gif perfect"}
      />
      {getGifByQuery}

      <SearchBar searchValue={"Buscar gifs"} handleSearch={handleSearch} />

      <PreviousSearches
        searches={previousTerm}
        handleTermClicked={handleTermClicked}
      />
      
      <Gifs gifs={gifs} />
    </>
  );
};

export default GifsApp;
