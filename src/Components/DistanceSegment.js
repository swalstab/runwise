import DistanceInput from "./DistanceInput.js";

function DistanceSegment({
  distance,
  unit,
  convertMiToKm,
  showDist,
  showInputDist,
  inputDistance,
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
            <option value="5 km">5 km</option>
            <option value="10 km">10 km</option>
            <option value="Half Marathon">Half Marathon</option>
            <option value="Marathon">Marathon</option>
            <option value="50 km">50 km</option>
            <option value="50 mi">50 mi</option>
            <option value="100 km">100 km</option>
            <option value="100 mi">100 mi</option>
            <option value="Other">Other</option>
          </select>
          {showDist && (
            <span>
              {unit === "km" ? distance : (distance / convertMiToKm).toFixed(2)}{" "}
              {unit}
            </span>
          )}
          {showInputDist && (
            <DistanceInput
              unit={unit}
              inputDistance={inputDistance}
              onDistanceChange={onDistanceChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default DistanceSegment;
