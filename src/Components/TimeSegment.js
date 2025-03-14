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
    <fieldset className="form__segment">
      <div>
        <legend>
          {name[0].toUpperCase() + name.slice(1)}
          {children}
        </legend>

        {timePartsAdjusted.map((part, idx) => (
          <TimeInput
            key={`${name}_${part.name}`}
            name={`${name}_${part.name}`}
            placeholder={part.placeholder}
            isFirstEl={idx === 0 ? true : false}
            curValue={part.value}
            onTimeChange={onTimeChange}
            onPaceChange={onPaceChange}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default TimeSegment;
