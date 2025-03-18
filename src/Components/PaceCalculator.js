import { useState } from "react";
import Calculator from "./Calculator.js";
import SavedResults from "./SavedResults.js";

function PaceCalculator() {
  const convertMiToKm = 1.60934;

  const [results, setResults] = useState([]);

  const calcConvertedPace = function (unit, distance, time) {
    const convertedDist =
      unit === "mi" ? Number(distance) : Number(distance / convertMiToKm);

    const timeTotal =
      Number(time.hour) * 60 + Number(time.min) + time.secTotal / 60;
    const paceTotal = timeTotal === 0 ? 0 : timeTotal / convertedDist;

    const paceMin = Math.floor(paceTotal);
    const paceSec = (paceTotal - paceMin) * 60;

    let updateSec = false;
    if (Math.round(paceSec) === 60) updateSec = true;

    const newPace = {
      min: `${paceMin + (updateSec ? 1 : 0)}`.padStart(2, "0"),
      sec: `${updateSec ? 0 : Math.round(paceSec)}`.padStart(2, "0"),
    };

    return newPace;
  };

  const addResult = function (
    distanceSelect,
    distance,
    inputDistance,
    unit,
    time,
    pace
  ) {
    const convertedPace = calcConvertedPace(unit, distance, time);

    setResults((results) => [
      ...results,
      {
        distance:
          distanceSelect === "Other" ? `${inputDistance} ${unit}` : distanceSelect,
        paceKm:
          unit === "km"
            ? `${pace.min.padStart(2, "0")}:${pace.sec.padStart(2, "0")}`
            : `${convertedPace.min.padStart(
                2,
                "0"
              )}:${convertedPace.sec.padStart(2, "0")}`,
        paceMi:
          unit === "mi"
            ? `${pace.min.padStart(2, "0")}:${pace.sec.padStart(2, "0")}`
            : `${convertedPace.min.padStart(
                2,
                "0"
              )}:${convertedPace.sec.padStart(2, "0")}`,
        time: `${time.hour.padStart(2, "0")}:${time.min.padStart(
          2,
          "0"
        )}:${time.sec.padStart(2, "0")}`,
      },
    ]);
  };

  const removeResult = function (idx) {
    const newResults = results.filter((_, i) => i !== idx);
    setResults(newResults);
  };

  return (
    <>
      <Calculator convertMiToKm={convertMiToKm} addResult={addResult} />
      <SavedResults results={results} removeResult={removeResult} />
    </>
  );
}

export default PaceCalculator;
