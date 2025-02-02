import "./Layout.css";

import { Outlet } from "react-router";

import Header from "../components/header/Header";
import Menu from "../pages/menu/Menu";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;