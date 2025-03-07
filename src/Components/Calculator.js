import DistanceSegment from "./DistanceSegment.js";
import TimeSegment from "./TimeSegment.js";

function Calculator() {
  return (
    <section className="section section__calculator">
      <h2>Pace Calculator</h2>
      <form className="calculator">
        <DistanceSegment />
        <TimeSegment name="time" hasHour={true} />
        <TimeSegment name="pace" hasHour={false} />

        <section className="form__segment form__segment--btn">
          <button className="btn btn--round">+</button>
        </section>
      </form>
    </section>
  );
}

export default Calculator;
