function SavedResultsData({ idx, distance, paceKm, paceMi, time, onClick }) {
  return (
    <tr>
      <td>{distance}</td>
      <td>{paceKm}</td>
      <td>{paceMi}</td>
      <td>{time}</td>
      <td>
        <button className="btn btn--round" onClick={onClick}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
}

export default SavedResultsData;
