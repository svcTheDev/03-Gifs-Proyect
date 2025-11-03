import React from "react";
import {Gif} from '../../gifs.mock/gifs.mock';

// interface Gif {
//   id: string;
//   title: string;
//   url: string;
//   width: number;
//   height: number;
// }

const Gifs = ( mockGifs : Gif[]) => {
  return (
    <div>
      <div className="gifs-container">
        {mockGifs.map((gifs) => (
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
