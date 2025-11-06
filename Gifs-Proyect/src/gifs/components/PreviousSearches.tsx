import React from "react";

interface Props {
  searches: string[];
  handleTermClicked: (term: string[]) => void;
}

const PreviousSearches = ({ searches, handleTermClicked}: Props) => {

  // function onTermClicked () {
  //   getPreviousSearches('Previous search');
  // }

  const termsList = (
    <div className="previous-searches">
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li onClick={() => handleTermClicked(searches)} key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );

  const emptyTermsList = <div className="previous-searches">
  <ul className="previous-searches-list">
    Sin términos de busqueda
  </ul>
</div>

  console.log(searches.length);
  console.log(searches);


  return (
    <div>
      <div className="content-center">
        <h1>Busquedas previas</h1>
      </div>
      {searches.length > 0 ? termsList : emptyTermsList}
    </div>
  );
};

export default PreviousSearches;
