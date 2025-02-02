import "./Header.css";

import { NavLink } from "react-router";

import Sidebar from "../sidebar/Sidebar"

import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <Sidebar />
        <div className="named">ARAFAT</div>
        <NavLink className="header-icon" to="search">
          <LuSearch />
        </NavLink>
      </div>
    </>
  );
};

export default Header;