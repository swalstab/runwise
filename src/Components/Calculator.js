function Calculator() {
  const unit = "km";
  const convertMiToKm = 1.60934;

  return (
    <section className="section section__calculator">
      <h2>Pace Calculator</h2>
      <form className="calculator">
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
              <span>{unit}</span>
            </div>
          </div>
        </section>

        <section className="form__segment form__segment--time">
          <div>
            <label className="form__label" id="label-time">
              Time
            </label>
            <div className="form__inputs">
              <input
                className="form__input form__input--hour"
                type="number"
                name="hour"
                min={0}
                placeholder="hh"
                aria-labelledby="label-time"
              ></input>
              <span>:</span>
              <input
                className="form__input form__input--min"
                type="number"
                name="minutes"
                min={0}
                max={59}
                placeholder="mm"
                aria-labelledby="label-time"
              ></input>
              <span>:</span>
              <input
                className="form__input form__input--sec"
                type="number"
                name="seconds"
                min={0}
                max={59}
                placeholder="ss"
                aria-labelledby="label-time"
              ></input>
            </div>
          </div>
        </section>

        <section className="form__segment form__segment--pace">
          <div>
            <label className="form__label" id="label-pace">
              Pace
            </label>
            <div className="form__inputs">
              <input
                className="form__input form__input--min"
                type="number"
                name="minutes"
                min={0}
                placeholder="mm"
                aria-labelledby="label-pace"
              ></input>
              <span>:</span>
              <input
                className="form__input form__input--sec"
                type="number"
                name="seconds"
                min={0}
                max={59}
                placeholder="ss"
                aria-labelledby="label-pace"
              ></input>
            </div>
          </div>
        </section>

        <section className="form__segment form__segment--btn">
          <button className="btn btn--round">+</button>
        </section>
      </form>
    </section>
  );
}

export default Calculator;
