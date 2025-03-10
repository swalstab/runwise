function DistanceInput({
  distance,
  unit,
  inputDistIsDisabled,
  onDistanceChange,
}) {
  const styleDisabled = { pointerEvents: inputDistIsDisabled && "none" };

  return (
    <>
      <input
        className="form__input form__input--distance"
        type="number"
        name="distance"
        placeholder="100"
        aria-labelledby="label-distance"
        style={styleDisabled}
        value={distance}
        onChange={onDistanceChange}
      ></input>
      <span> {unit}</span>
    </>
  );
}

export default DistanceInput;
