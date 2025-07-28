import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/filterSlice";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ placeholder = "Search..." }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className="h-[40px] w-full bg-[var(--DarkGray)] text-sm px-4 pl-10 rounded-md outline-none placeholder-gray-400"
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
    </div>
  );
};

export default SearchInput;
