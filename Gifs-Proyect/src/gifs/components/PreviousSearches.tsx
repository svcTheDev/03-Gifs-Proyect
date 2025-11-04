import React from "react";

interface Props {
  searches: string[];
}

const PreviousSearches = ({ searches }: Props) => {
  const termsList = (
    <div className="previous-searches">
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );

  console.log(searches.length);

  return (
    <div>
      <div className="content-center">
        <h1>Busquedas previas</h1>
      </div>
      {searches.length > 0 ? termsList : ''}
    </div>
  );
};

export default PreviousSearches;
