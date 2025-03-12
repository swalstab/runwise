import { useState } from "react";
import ToggleButton from "./ToggleButton.js";
import DistanceSegment from "./DistanceSegment.js";
import TimeSegment from "./TimeSegment.js";

function Calculator() {
  const [unit, setUnit] = useState("km");
  const [isToggled, setIsToggled] = useState(false);
  const [distance, setDistance] = useState(5);
  const [showInputDist, setShowInputDist] = useState(false);
  const [inputDistIsDisabled, setInputDistIsDisabled] = useState(true);
  const [time, setTime] = useState({ hour: "00", min: "20", sec: "00" });
  const [pace, setPace] = useState({ min: "04", sec: "00" });

  const convertMiToKm = 1.60934;
  const convertDistance = unit === "mi" ? convertMiToKm : 1;

  const updatePace = function (pace) {
    const paceMin = Number(pace.min);
    const paceSec = Number(pace.sec);
    const newPace = {
      min: `${paceMin}`.padStart(2, "0"),
      sec: `${paceSec}`.padStart(2, "0"),
    };
    setPace(newPace);
  };

  const updateTime = function (time) {
    const timeHour = Number(time.hour);
    const timeMin = Number(time.min);
    const timeSec = Number(time.sec);
    const newTime = {
      hour: `${timeHour}`.padStart(2, "0"),
      min: `${timeMin}`.padStart(2, "0"),
      sec: `${timeSec}`.padStart(2, "0"),
    };
    setTime(newTime);
  };

  const calcAndUpdatePace = function (distance, time) {
    const timeTotal =
      Number(time.hour) * 60 + Number(time.min) + Number(time.sec) / 60;
    const paceTotal = timeTotal / Number(distance);
    const paceMin = Math.floor(paceTotal);
    const paceSec = Math.round((paceTotal - paceMin) * 60);
    const newPace = {
      min: `${paceMin}`.padStart(2, "0"),
      sec: `${paceSec}`.padStart(2, "0"),
    };
    setPace(newPace);
  };

  const calcAndUpdateTime = function (distance, pace) {
    const paceTotal = Number(pace.min) + Number(pace.sec) / 60;
    const timeTotal = paceTotal * Number(distance);
    const timeHour = Math.floor(timeTotal / 60);
    const timeMin = Math.floor(timeTotal - timeHour * 60);
    const timeSec = Math.round((timeTotal - timeHour * 60 - timeMin) * 60);
    const newTime = {
      hour: `${timeHour}`.padStart(2, "0"),
      min: `${timeMin}`.padStart(2, "0"),
      sec: `${timeSec}`.padStart(2, "0"),
    };
    setTime(newTime);
  };

  const handleToggleButton = function () {
    setIsToggled(!isToggled);
    const newDistance =
      unit === "km" ? distance / convertMiToKm : distance * convertMiToKm;

    setUnit((unit) => (unit === "km" ? "mi" : "km"));
    setDistance(`${newDistance.toFixed(2)}`);

    calcAndUpdatePace(newDistance, time);
    updateTime(time);
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
      newDistance = 150;
      setShowInputDist(true);
      setInputDistIsDisabled(false);
    }

    setDistance(`${newDistance}`);
    calcAndUpdateTime(newDistance, pace);
    updatePace(pace);
  };

  const handleDistanceChange = function (e) {
    const newDistance = Number(e.target.value);
    setDistance(`${newDistance}`);
    calcAndUpdateTime(newDistance, pace);
    updatePace(pace);
  };

  const handleTimeChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newTime = { ...time, [changedInputField]: newValue };
    setTime(newTime);

    calcAndUpdatePace(distance, newTime);
  };

  const handlePaceChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newPace = { ...pace, [changedInputField]: newValue };
    setPace(newPace);

    calcAndUpdateTime(distance, newPace);
  };

  return (
    <section className="section section__calculator">
      <h2>Pace Calculator</h2>
      <ToggleButton isToggled={isToggled} onToggleButton={handleToggleButton} />
      <form className="calculator" onSubmit={(e) => e.preventDefault()}>
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
          name="pace"
          hasHour={false}
          values={pace}
          onPaceChange={handlePaceChange}
        >
          <span className="smal-font"> (min/{unit})</span>
        </TimeSegment>
        <TimeSegment
          name="time"
          hasHour={true}
          values={time}
          onTimeChange={handleTimeChange}
        />

        <section className="form__segment form__segment--btn">
          <button className="btn btn--round">+</button>
        </section>
      </form>
    </section>
  );
}

export default Calculator;
