function SavedResultsData({ distance, paceKm, paceMi, time }) {
  return (
    <tr>
      <td>{distance}</td>
      <td>{paceKm}</td>
      <td>{paceMi}</td>
      <td>{time}</td>
      <td>
        <button className="btn btn--round">-</button>
      </td>
    </tr>
  );
}

export default SavedResultsData;
