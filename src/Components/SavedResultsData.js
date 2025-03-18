function SavedResultsData({ idx, distance, paceKm, paceMi, time, onClick }) {
  return (
    <tr>
      <td>{distance}</td>
      <td>{paceKm}</td>
      <td>{paceMi}</td>
      <td>{time}</td>
      <td>
        <button className="btn btn--round" onClick={onClick}>
          -
        </button>
      </td>
    </tr>
  );
}

export default SavedResultsData;
