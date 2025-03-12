import TimeInput from "./TimeInput.js";

function TimeSegment({
  children,
  name,
  hasHour,
  values,
  onTimeChange,
  onPaceChange,
}) {
  const timeParts = [
    { name: "min", placeholder: "mm", value: values.min },
    { name: "sec", placeholder: "ss", value: values.sec },
  ];

  const timePartsAdjusted = hasHour
    ? [{ name: "hour", placeholder: "hh", value: values.hour }, ...timeParts]
    : timeParts;

  return (
    <section className={`form__segment form__segment--${name}`}>
      <div>
        <label className="form__label" id={`label-${name}`}>
          {name[0].toUpperCase() + name.slice(1)}
        </label>
        {children}
        <div className="form__inputs">
          {timePartsAdjusted.map((part, idx) => (
            <TimeInput
              key={`${name}_${part.name}`}
              name={`${name}_${part.name}`}
              placeholder={part.placeholder}
              labelName={name}
              isFirstEl={idx === 0 ? true : false}
              curValue={part.value}
              onTimeChange={onTimeChange}
              onPaceChange={onPaceChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeSegment;
