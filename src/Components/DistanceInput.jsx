function DistanceInput({ unit, inputDistance, onDistanceChange }) {
  return (
    <div className="input__field input__field--distance">
      <input
        className="input__distance input--text"
        type="text"
        id="distance"
        name="distance"
        required
        value={inputDistance}
        onChange={onDistanceChange}
      ></input>
      <label className="input__field--label" htmlFor="distance">
        distance
      </label>
      <span> {unit}</span>
    </div>
  );
}

export default DistanceInput;
