import SearchBar from "./gifs/components/SearchBar";
import CustomHeader from "./shared/components/CustomHeader";
import PreviousSearches from "./gifs/components/PreviousSearches";
import Gifs from "./gifs/components/Gifs";
import {mockGifs} from './gifs.mock/gifs.mock';
 

import "./index.css";
const GifsApp = () => {
  console.log(mockGifs);

  return (
    <>
      <CustomHeader title={'Buscador de gifs'} description={'Descubre y comparte el gif perfect'} />
      <SearchBar searchValue={'Buscar gifs'} />
      <PreviousSearches />
      <Gifs mockGifs={mockGifs} />
    </>
  );
};

export default GifsApp;
