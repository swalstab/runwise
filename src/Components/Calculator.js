import { useState } from "react";
import ToggleButton from "./ToggleButton.js";
import DistanceSegment from "./DistanceSegment.js";
import TimeSegment from "./TimeSegment.js";

function Calculator({ convertMiToKm, addResult }) {
  const [unit, setUnit] = useState("km");
  const [unitIsToggled, setUnitIsToggled] = useState(false);
  const [distance, setDistance] = useState("5");
  const [distanceSelect, setDistanceSelect] = useState("5 km");
  const [showDist, setShowDist] = useState(false);
  const [showInputDist, setShowInputDist] = useState(false);
  const [inputDistance, setInputDistance] = useState("150");
  const [time, setTime] = useState({
    hour: "00",
    min: "25",
    sec: "00",
    secTotal: 0,
  });
  const [pace, setPace] = useState({ min: "05", sec: "00", secTotal: 0 });

  const updatePace = function (pace) {
    const { min, sec, secTotal } = pace;
    const newPace = {
      min: `${Number(min)}`.padStart(2, "0"),
      sec: `${Number(sec)}`.padStart(2, "0"),
      secTotal,
    };
    setPace(newPace);
  };

  const updateTime = function (time) {
    const { hour, min, sec, secTotal } = time;
    const newTime = {
      hour: `${Number(hour)}`.padStart(2, "0"),
      min: `${Number(min)}`.padStart(2, "0"),
      sec: `${Number(sec)}`.padStart(2, "0"),
      secTotal,
    };
    setTime(newTime);
  };

  const calcAndUpdatePace = function (unit, distance, time) {
    const curDist =
      unit === "km" ? Number(distance) : Number(distance / convertMiToKm);
    const timeTotal =
      Number(time.hour) * 60 + Number(time.min) + time.secTotal / 60;
    const paceTotal = timeTotal === 0 ? 0 : timeTotal / curDist;

    const paceMin = Math.floor(paceTotal);
    const paceSec = (paceTotal - paceMin) * 60;

    let updateSec = false;
    if (Math.round(paceSec) === 60) updateSec = true;

    const newPace = {
      min: `${paceMin + (updateSec ? 1 : 0)}`.padStart(2, "0"),
      sec: `${updateSec ? 0 : Math.round(paceSec)}`.padStart(2, "0"),
      secTotal: paceSec,
    };

    setPace(newPace);
  };

  const calcAndUpdateTime = function (unit, distance, pace) {
    const curDist =
      unit === "km" ? Number(distance) : Number(distance / convertMiToKm);
    const paceTotal = Number(pace.min) + Number(pace.sec) / 60;
    const timeTotal = paceTotal === 0 ? 0 : paceTotal * curDist;

    const timeHour = Math.floor(timeTotal / 60);
    const timeMin = Math.floor(timeTotal - timeHour * 60);
    const timeSec = (timeTotal - timeHour * 60 - timeMin) * 60;

    const newTime = {
      hour: `${timeHour}`.padStart(2, "0"),
      min: `${timeMin}`.padStart(2, "0"),
      sec: `${Math.round(timeSec)}`.padStart(2, "0"),
      secTotal: timeSec,
    };

    setTime(newTime);
  };

  const handleToggleUnit = function () {
    setUnitIsToggled((unitIsToggled) => !unitIsToggled);

    setInputDistance(
      unit === "km"
        ? `${Number((Number(distance) / convertMiToKm).toFixed(2))}`
        : `${Number(Number(distance).toFixed(2))}`
    );

    const newUnit = unit === "km" ? "mi" : "km";
    setUnit(newUnit);

    calcAndUpdatePace(newUnit, distance, time);
    updateTime(time);
  };

  const handleDistanceSelect = function (e) {
    const value = e.target.value;
    setDistanceSelect(e.target.value);
    let newDistance;

    if (Number.isFinite(Number(value.split(" ")[0]))) {
      const dist = value.split(" ")[0];
      const unit = value.split(" ")[1];
      newDistance = unit === "km" ? dist : `${dist * convertMiToKm}`;
      setShowDist(false);
      setShowInputDist(false);
    }
    if (value === "Half Marathon") {
      newDistance = "21.1";
      setShowDist(true);
      setShowInputDist(false);
    }
    if (value === "Marathon") {
      newDistance = "42.2";
      setShowDist(true);
      setShowInputDist(false);
    }
    if (value === "Other") {
      newDistance = unit === "km" ? "150" : (150 * convertMiToKm).toFixed(2);
      setInputDistance("150");
      setShowDist(false);
      setShowInputDist(true);
    }

    setDistance(newDistance);
    calcAndUpdateTime(unit, newDistance, pace);
    updatePace(pace);
  };

  const handleDistanceChange = function (e) {
    const input = e.target.value;
    setInputDistance(input);

    const newDistance = unit === "km" ? input : input * convertMiToKm;
    setDistance(newDistance);
    calcAndUpdateTime(unit, newDistance, pace);
    updatePace(pace);
  };

  const handleTimeChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newTime = { ...time, [changedInputField]: newValue };
    newTime.secTotal = Number(newTime.sec);
    setTime(newTime);
    calcAndUpdatePace(unit, distance, newTime);
  };

  const handlePaceChange = function (changedField, newValue) {
    const changedInputField = changedField.split("_")[1];
    const newPace = { ...pace, [changedInputField]: newValue };
    newPace.secTotal = Number(newPace.sec);
    setPace(newPace);
    calcAndUpdateTime(unit, distance, newPace);
  };

  const handleButtonAdd = function () {
    updatePace(pace);
    updateTime(time);
    addResult(distanceSelect, distance, inputDistance, unit, time, pace);
  };

  return (
    <section className="section section__calculator">
      <h2>Pace Calculator</h2>
      <ToggleButton
        unitIsToggled={unitIsToggled}
        onToggleButton={handleToggleUnit}
      />
      <form
        className="calculator box-shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <DistanceSegment
          distance={distance}
          unit={unit}
          convertMiToKm={convertMiToKm}
          showDist={showDist}
          showInputDist={showInputDist}
          inputDistance={inputDistance}
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

        <button className="btn btn--round box-shadow" onClick={handleButtonAdd}>
          +
        </button>
      </form>
    </section>
  );
}

export default Calculator;
