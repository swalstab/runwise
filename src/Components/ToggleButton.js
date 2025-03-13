function ToggleButton({ unitIsToggled, onToggleButton }) {
  return (
    <div className="container--toggle">
      <span className={`toggle__option align_right ${!unitIsToggled && "active"}`}>
        km
      </span>

      <button className="btn btn--toggle" onClick={onToggleButton}>
        <div className={`slider ${!unitIsToggled && "slider--left"}`}></div>
      </button>

      <span className={`toggle__option ${unitIsToggled && "active"}`}>mi</span>
    </div>
  );
}

export default ToggleButton;
