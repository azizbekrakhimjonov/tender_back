import { createSlice } from '@reduxjs/toolkit';

const savedLang = localStorage.getItem('lang') || 'uz';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    lang: savedLang,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
