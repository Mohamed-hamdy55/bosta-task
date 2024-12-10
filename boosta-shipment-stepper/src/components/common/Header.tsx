import React from "react";
import HeaderLogo from "@components/boosta/HeaderLogo";
import LanguageSelector from "./LanguageSelector";
import styles from "@styles/styles";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return ( 
    <header  className="w-full h-[70px] p-[20px] bg-[#f3fafb] fixed z-10 shadow-search-input-shadow dark:bg-black dark:border-b">
      <div className={`${styles.normalFlex} ${styles.container} justify-between `}>
        <HeaderLogo />
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
   );
}
 
export default Header;