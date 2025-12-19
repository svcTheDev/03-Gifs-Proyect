
interface Props {
  searches: string[];
  handleTermClicked: (term: string) => void;
}

const PreviousSearches = ({ searches, handleTermClicked}: Props) => {


  console.log(searches);

  return (
    <div>
      <div className="content-center">
        <h1>Busquedas previas</h1>
      </div>
      <div className="previous-searches">
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => handleTermClicked(term)}>{term}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default PreviousSearches;
