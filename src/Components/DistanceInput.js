function DistanceInput({ unit, inputDistance, onDistanceChange }) {
  return (
    <>
      <input
        className="form__input form__input--distance"
        type="text"
        name="dist"
        placeholder="distance"
        aria-labelledby="label-distance"
        value={inputDistance}
        onChange={onDistanceChange}
      ></input>
      <span> {unit}</span>
    </>
  );
}

export default DistanceInput;
