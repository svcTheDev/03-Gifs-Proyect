import React, { FC } from "react";
import type {Gif} from '../../gifs.mock/gifs.mock';

interface Props {
  gifs: Gif[];
}

const Gifs : FC<Props> = ({gifs} )  => {
  return (
    <div>
      <div className="gifs-container">
        {gifs.map((gifs) => (
          <div className="gif-card" key={gifs.id}>
            <img src={gifs.url} alt={gifs.title} />
            <p>{gifs.title}</p>
            <p>
              {gifs.width} x {gifs.height} - (1.5 mb){" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gifs;
