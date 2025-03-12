function SavedResults() {
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
            <th scope="col">Pace</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
          <tr>
            <td>5 km</td>
            <td>04:00</td>
            <td>20:00</td>
            <td>
              <button className="btn btn--round">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SavedResults;
