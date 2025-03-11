function ToggleButton({ isToggled, onToggleButton }) {
  return (
    <div className="container--toggle">
      <span className={`toggle__option align_right ${!isToggled && "active"}`}>
        km
      </span>

      <button className="btn btn--toggle" onClick={onToggleButton}>
        <div className={`slider ${!isToggled && "slider--left"}`}></div>
      </button>

      <span className={`toggle__option ${isToggled && "active"}`}>mi</span>
    </div>
  );
}

export default ToggleButton;
