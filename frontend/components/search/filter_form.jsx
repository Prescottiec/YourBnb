import React from "react";

const handleChange = (filter, updateFilter) => (e) =>
  updateFilter(filter, parseInt(e.currentTarget.value));

const FilterForm = ({ minAdults, maxAdults, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br />
    <label>Minimum Adults</label>
    <input
      type="number"
      value={minAdults}
      onChange={handleChange("minAdults", updateFilter)}
    />
    <br />
    <label>Maximum Adults</label>
    <input
      type="number"
      value={maxAdults}
      onChange={handleChange("maxAdults", updateFilter)}
    />
  </div>
);

export default FilterForm;
