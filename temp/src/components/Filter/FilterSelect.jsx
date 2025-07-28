import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const FilterSelect = ({ label, options, filterKey }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.filters[filterKey]);

  return (
    <div className="relative min-w-[180px]">
      <select
        className="appearance-none bg-[var(--DarkGray)] border border-gray-600 text-white text-sm px-4 pr-10 py-2 rounded-md w-full outline-none"
        value={value}
        onChange={(e) => dispatch(setFilter({ key: filterKey, value: e.target.value }))}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt.toLowerCase()}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 8l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
};

export default FilterSelect;
