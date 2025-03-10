import { useState } from "react";
import DistanceSegment from "./DistanceSegment.js";
import TimeSegment from "./TimeSegment.js";

function Calculator() {
  const unit = "km";
  // const [unit, setUnit] = useState("km");
  const [distance, setDistance] = useState(5);
  const [showInputDist, setShowInputDist] = useState(false);
  const [inputDistIsDisabled, setInputDistIsDisabled] = useState(true);
  const [time, setTime] = useState({ hour: 0, min: 20, sec: 0 });
  const [pace, setPace] = useState({ min: 4, sec: 0 });

  const convertMiToKm = 1.60934;
  const convertDistance = unit === "mi" ? convertMiToKm : 1;

  const calcPace = function (distance, time) {
    const timeTotal = time.hour * 60 + time.min + time.sec / 60;
    const paceTotal = timeTotal / distance;
    const paceMin = Math.floor(paceTotal);
    const paceSec = Math.round((paceTotal - paceMin) * 60);
    const newPace = { min: paceMin, sec: paceSec };
    setPace(newPace);
  };

  const calcTime = function (distance, pace) {
    const paceTotal = pace.min + pace.sec / 60;
    const timeTotal = paceTotal * distance;
    const timeHour = Math.floor(timeTotal / 60);
    const timeMin = Math.floor(timeTotal - timeHour * 60);
    const timeSec = Math.round((timeTotal - timeHour * 60 - timeMin) * 60);
    const newTime = { hour: timeHour, min: timeMin, sec: timeSec };
    setTime(newTime);
  };

  const handleDistanceSelect = function (e) {
    const value = e.target.value;
    let newDistance;

    if (Number.isFinite(Number(value))) {
      newDistance = Number((Number(value) / convertDistance).toFixed(2));
      setShowInputDist(false);
      setInputDistIsDisabled(true);
    }
    if (value === "Half Marathon") {
      newDistance = Number((21.1 / convertDistance).toFixed(2));
      setShowInputDist(true);
      setInputDistIsDisabled(true);
    }
    if (value === "Marathon") {
      newDistance = Number((42.2 / convertDistance).toFixed(2));
      setShowInputDist(true);
      setInputDistIsDisabled(true);
    }
    if (value === "Custom") {
      newDistance = "";
      setShowInputDist(true);
      setInputDistIsDisabled(false);
    }

    setDistance(newDistance);
    calcPace(newDistance, time);
  };

  const handleDistanceChange = function (e) {
    setDistance(Number(e.target.value));
  };

  const handleTimeChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newTime = { ...time, [changedInputField]: Number(newValue) };
    setTime(newTime);

    calcPace(distance, newTime);
  };

  const handlePaceChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newPace = { ...pace, [changedInputField]: Number(newValue) };
    setPace(newPace);

    calcTime(distance, newPace);
  };

  return (
    <section className="section section__calculator">
      <h2>Pace Calculator</h2>
      <form className="calculator">
        <DistanceSegment
          distance={distance}
          unit={unit}
          convertMiToKm={convertMiToKm}
          showInputDist={showInputDist}
          inputDistIsDisabled={inputDistIsDisabled}
          onDistanceSelect={handleDistanceSelect}
          onDistanceChange={handleDistanceChange}
        />
        <TimeSegment
          name="time"
          hasHour={true}
          values={time}
          onTimeChange={handleTimeChange}
        />
        <TimeSegment
          name="pace"
          hasHour={false}
          values={pace}
          onPaceChange={handlePaceChange}
        />

        <section className="form__segment form__segment--btn">
          <button className="btn btn--round">+</button>
        </section>
      </form>
    </section>
  );
}

export default Calculator;
