function TimeInput({ name, placeholder, labelName, isFirstEl }) {
  return (
    <>
      {!isFirstEl && <span> : </span>}
      <input
        className={`form__input form__input--${name}`}
        type="number"
        name={name}
        min={0}
        max={!isFirstEl ? 59 : undefined}
        placeholder={placeholder}
        aria-labelledby={`label-${labelName}`}
      ></input>
    </>
  );
}

export default TimeInput;
