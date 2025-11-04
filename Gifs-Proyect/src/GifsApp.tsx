import SearchBar from "./gifs/components/SearchBar";
import CustomHeader from "./shared/components/CustomHeader";
import PreviousSearches from "./gifs/components/PreviousSearches";
import Gifs from "./gifs/components/Gifs";
import {mockGifs} from './gifs.mock/gifs.mock';

import "./index.css";
import { useState } from "react";


const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState([]);

  return (
    <>
      <CustomHeader title={'Buscador de gifs'} description={'Descubre y comparte el gif perfect'} />
      <SearchBar searchValue={'Buscar gifs'} handleTermClicked={handleTermClicked} />
      <PreviousSearches searches={
        ["amor", "soledad", "amistad"]} />
      <Gifs gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
