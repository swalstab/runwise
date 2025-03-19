function FilterItem({ dist }) {
  return (
    <li>
      <input
        type="checkbox"
        id={`${dist}`}
        name={`${dist}`}
        // checked
      ></input>
      <label htmlFor={`${dist}`}>{dist}</label>
    </li>
  );
}

export default FilterItem;
