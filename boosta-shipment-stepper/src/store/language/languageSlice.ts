// store/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "en" | "ar"; // Restrict allowed values here

interface LanguageState {
  currentLanguage: Language; // Enforce type-safe values
}

const initialState: LanguageState = {
  currentLanguage: (localStorage.getItem("language") as Language) || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
