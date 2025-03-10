import DistanceInput from "./DistanceInput.js";

function DistanceSegment({
  distance,
  unit,
  convertMiToKm,
  showInputDist,
  inputDistIsDisabled,
  onDistanceSelect,
  onDistanceChange,
}) {
  return (
    <section className="form__segment form__segment--distance">
      <div>
        <label className="form__label" id="label-distance">
          Distance
        </label>
        <div className="form__inputs">
          <select className="form__select" onChange={onDistanceSelect}>
            <option value={5}>5 km</option>
            <option value={10}>10 km</option>
            <option value="Half Marathon">Half Marathon</option>
            <option value="Marathon">Marathon</option>
            <option value={50}>50 km</option>
            <option value={50 * convertMiToKm}>50 mi</option>
            <option value={100}>100 km</option>
            <option value={100 * convertMiToKm}>100 mi</option>
            <option value="Custom">Custom</option>
          </select>
          {showInputDist && (
            <DistanceInput
              distance={distance}
              unit={unit}
              inputDistIsDisabled={inputDistIsDisabled}
              onDistanceChange={onDistanceChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default DistanceSegment;
