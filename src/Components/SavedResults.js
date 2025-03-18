import SavedResultsData from "./SavedResultsData.js";

function SavedResults({ results, removeResult }) {
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
              {/* style={results.length===0 && {borderBottomLeftRadius: "1.6rem"}} */}
              Distance
              {/* <i className="fa-solid fa-filter"></i> */}
              {/* <div>
                <button className="btn"><i className="fa-solid fa-filter"></i></button>
                <ul>
                  <li>
                    <input type="checkbox"></input>a
                  </li>
                  <li>
                    <input type="checkbox"></input>b
                  </li>
                  <li>
                    <input type="checkbox"></input>c
                  </li>
                </ul>
              </div> */}
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
