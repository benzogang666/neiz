import menu from "../../assets/menu";

import { createContext, useContext } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};