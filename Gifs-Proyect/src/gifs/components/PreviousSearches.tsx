import React from "react";

interface Props {
  searches: string[];
  handelTermClicked: string[];
}

const PreviousSearches = ({searches} : Props) => {
  return (
    <div>
      <div className="content-center">
        <h1>Busquedas previas</h1>
      </div>
      <div className="previous-searches">
        <ul className="previous-searches-list">
          {searches.map((term) => (
          <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviousSearches;
