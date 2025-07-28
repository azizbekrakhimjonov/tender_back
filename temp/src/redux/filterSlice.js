// redux/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filters: {
    deliverySpeed: "",
    priceRange: "",
    location: "",
    vehicleType: "",
    vehicleStatus: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.search = "";
      Object.keys(state.filters).forEach(key => state.filters[key] = "");
    },
  },
});

export const { setSearch, setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
