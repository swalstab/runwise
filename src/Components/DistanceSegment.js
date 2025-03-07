function DistanceSegment() {
  const unit = "km";
  const convertMiToKm = 1.60934;

  return (
    <section className="form__segment form__segment--distance">
      <div>
        <label className="form__label" id="label-distance">
          Distance
        </label>
        <div className="form__inputs">
          <select className="form__select">
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
          <input
            className="form__input form__input--distance"
            type="number"
            name="distance"
            placeholder="100"
            aria-labelledby="label-distance"
          ></input>
          <span> {unit}</span>
        </div>
      </div>
    </section>
  );
}

export default DistanceSegment;
