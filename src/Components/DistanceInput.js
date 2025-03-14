function DistanceInput({ unit, inputDistance, onDistanceChange }) {
  return (
    <div className="input__field">
      {/* <label htmlFor="distance">distance</label> */}
      <label htmlFor="distance"></label>
      <input
        className="input--text"
        type="text"
        id="distance"
        name="distance"
        value={inputDistance}
        onChange={onDistanceChange}
      ></input>
      <span> {unit}</span>
    </div>
  );
}

export default DistanceInput;
