import { NavLink } from "react-router";
import "./Header.css";

import { LuMenu, LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <LuMenu className="header-icon" />
        <div className="named">ARAFAT</div>
        <NavLink className="header-icon">
          <LuSearch />
        </NavLink>
      </div>
    </>
  );
};

export default Header;