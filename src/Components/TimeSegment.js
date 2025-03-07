import TimeInput from "./TimeInput.js";

function TimeSegment({ name, hasHour }) {
  const timeParts = [
    { name: "min", placeholder: "mm" },
    { name: "sec", placeholder: "ss" },
  ];

  const timePartsAdjusted = hasHour
    ? [{ name: "hour", placeholder: "hh" }, ...timeParts]
    : timeParts;

  return (
    <section className={`form__segment form__segment--${name}`}>
      <div>
        <label className="form__label" id={`label-${name}`}>
          {name[0].toUpperCase() + name.slice(1)}
        </label>
        <div className="form__inputs">
          {timePartsAdjusted.map((part, idx) => (
            <TimeInput
              key={part.name}
              name={part.name}
              placeholder={part.placeholder}
              labelName={name}
              isFirstEl={idx === 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeSegment;
