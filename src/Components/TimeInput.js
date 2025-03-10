function TimeInput({
  name,
  placeholder,
  labelName,
  isFirstEl,
  curValue,
  onTimeChange,
  onPaceChange,
}) {
  const handleChange = (e) => {
    if (e.target.name.split("_")[0] === "time")
      onTimeChange(e.target.name, e.target.value);

    if (e.target.name.split("_")[0] === "pace")
      onPaceChange(e.target.name, e.target.value);
  };

  return (
    <>
      {!isFirstEl && <span> : </span>}
      <input
        className={`form__input form__input--${name}`}
        type="text"
        name={name}
        // min={0}
        // max={!isFirstEl ? 59 : undefined}
        placeholder={placeholder}
        aria-labelledby={`label-${labelName}`}
        value={curValue}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default TimeInput;
