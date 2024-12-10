import Logo from "@assets/logo.svg?react";
import Ar_Logo from "@assets/ar_logo.svg?react";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  return (
    <Link to="/" title="logo">
    {
      currentLanguage === "en" ? <Logo  /> : <Ar_Logo  />
    }
    </Link>
  );
};

export default HeaderLogo;
