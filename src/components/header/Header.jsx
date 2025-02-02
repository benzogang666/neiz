import "./Header.css";

import { LuMenu, LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <LuMenu className="header-icon" />
        <div className="named">ARAFAT</div>
        <LuSearch className="header-icon" />
      </div>
    </>
  );
};

export default Header;