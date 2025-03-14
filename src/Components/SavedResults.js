import SavedResultsData from "./SavedResultsData.js";

function SavedResults() {
  const results = [
    { distance: "5 km", paceKm: "04:00", paceMi: "06:26", time: "20:00" },
    { distance: "10 km", paceKm: "04:00", paceMi: "06:26", time: "40:00" },
    { distance: "20 km", paceKm: "05:00", paceMi: "10:26", time: "80:00" },
    { distance: "5 km", paceKm: "04:00", paceMi: "06:26", time: "20:00" },
  ];

  return (
    <section className="section section__saved-results">
      <h2>Saved Results</h2>
      <table className="saved-results">
        <thead>
          <tr>
            <th scope="col">
              Distance
              {/* <div>
                <button>Test</button>
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, idx) => (
            <SavedResultsData
              key={idx}
              distance={res.distance}
              paceKm={res.paceKm}
              paceMi={res.paceMi}
              time={res.time}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SavedResults;
