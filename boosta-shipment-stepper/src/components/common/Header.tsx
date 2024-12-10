import HeaderLogo from "@components/boosta/HeaderLogo";
import LanguageSelector from "./LanguageSelector";
import styles from "@styles/styles";

const Header = () => {
  return ( 
    <header  className="w-full h-[70px] p-[20px] bg-[#f3fafb] fixed z-10 shadow-search-input-shadow">
      <div className={`${styles.normalFlex} ${styles.container} justify-between `}>
        <HeaderLogo />
        <LanguageSelector />
      </div>
    </header>
   );
}
 
export default Header;