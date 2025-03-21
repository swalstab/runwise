function TimeInput({
  name,
  placeholder,
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
      <div className="input__field">
        <input
          className="input--text"
          type="text"
          id={name}
          name={name}
          // min={0}
          // max={!isFirstEl ? 59 : undefined}
          maxLength={!isFirstEl ? 2 : undefined}
          required
          value={curValue}
          onChange={handleChange}
        ></input>
        <label className="input__field--label" htmlFor={name}>
          {placeholder}
        </label>
      </div>
    </>
  );
}

export default TimeInput;
