import "./Header.css";

import { useNavigate } from "react-router";

import Sidebar from "../sidebar/Sidebar";

import { LuSearch } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <Sidebar />
        <div className="named">ARAFAT</div>
        <LuSearch className="header-icon" onClick={() => navigate("/search")} />
      </div>
    </>
  );
};

export default Header;