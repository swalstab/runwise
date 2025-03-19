import FilterItem from "./FilterItem.js";
import SavedResultsData from "./SavedResultsData.js";

function SavedResults({ results, removeResult }) {
  const distanceUnique = [...new Set(results.map((res) => res.distance))];

  const handleButtonRemove = function (idx) {
    removeResult(idx);
  };

  return (
    <section className="section section__saved-results">
      <h2>Saved Results</h2>
      <table className="saved-results">
        <thead>
          <tr>
            <th
              scope="col"
              style={{
                borderBottomLeftRadius: results.length === 0 ? "1.6rem" : "",
              }}
            >
              Distance
              <div className="container--icons">
                <i className="fa-solid fa-filter fa-sm"></i>
                <ul className="container--filter">
                  {distanceUnique.map((dist) => (
                    <FilterItem key={dist} dist={dist} />
                  ))}
                </ul>
              </div>
            </th>
            <th scope="col">
              Pace <span className="smal-font">(min/km)</span>
            </th>
            <th scope="col">
              Pace <span className="smal-font">(min/mi)</span>
            </th>
            <th scope="col">Time</th>
            <th
              scope="col"
              style={{
                borderBottomRightRadius: results.length === 0 ? "1.6rem" : "",
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, idx) => (
            <SavedResultsData
              key={idx}
              idx={idx}
              distance={res.distance}
              paceKm={res.paceKm}
              paceMi={res.paceMi}
              time={res.time}
              onClick={() => handleButtonRemove(idx)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SavedResults;
