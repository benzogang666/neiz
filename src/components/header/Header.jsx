import "./Header.css";

import { useNavigate } from "react-router";

import Side from "../side/Side";

import { LuSearch } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <Side />
        <div className="named">ARAFAT</div>
        <LuSearch className="header-icon" onClick={() => navigate("/search")} />
      </div>
    </>
  );
};

export default Header;