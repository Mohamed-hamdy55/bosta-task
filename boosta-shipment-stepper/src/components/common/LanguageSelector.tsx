import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/store";
import { setLanguage } from "@store/language/languageSlice";
import styles from "@styles/styles";

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const handleChange = () => {
    dispatch(setLanguage(currentLanguage === "en" ? "ar" : "en"));
  };

  return (
    <div className={`${styles.normalFlex}`}>
      {/* Chanage language button */}
      <button
        className="text-white  p-2 border rounded-md bg-[#e30613] font-[500] w-20"
        type="button"
        onClick={() => {
          handleChange();
        }}
      >
        {currentLanguage === "en" ? "عربى" : "English"}
      </button>
    </div>
  );
};

export default LanguageSelector;
