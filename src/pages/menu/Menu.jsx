import "./Menu.css";

import { useCart } from "../../contexts/cartContext/CartContext";
import { useMenu } from "../../contexts/menuContext/MenuContext";

import { useState } from "react";
import { NavLink } from "react-router";

import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

import CC from "../../components/cards/col-card/Col-Card";
import RC from "../../components/cards/row-card/Row-Card";

const Menu = () => {
  const { getTotalPrice } = useCart();
  const menu = useMenu();

  const [isCategory, setIsCategory] = useState(menu.categories[0]);
  const [isSubCategory, setIsSubCategory] = useState(
    isCategory.subcategories[0]
  );

  const [view, setView] = useState("row");

  return (
    <>
      <div className="menu">
        <div className="categories">
          {menu.categories.map((line) => (
            <div
              key={line.slug}
              onClick={() => {
                setIsCategory(line);
                setIsSubCategory(line.subcategories[0]);
              }}
              className="category"
            >
              {line.name}
            </div>
          ))}
        </div>

        <div className="sub-categories">
          {isCategory.subcategories.map((line) => (
            <div
              className={`sub-category ${
                isSubCategory.slug === line.slug ? "active-sub-category" : ""
              }`}
              onClick={() => setIsSubCategory(line)}
              key={line.slug}
            >
              {line.name}
            </div>
          ))}
        </div>

        <div className="reservoir">
          <div className="reservoir-views">
            <LuLayoutList onClick={() => setView("col")} />
            <LuLayoutGrid onClick={() => setView("row")} />
          </div>

          <div className="reservoir-cards">
            {view === "col" ? (
              <CC round={isSubCategory.items} />
            ) : (
              <RC round={isSubCategory.items} />
            )}
          </div>
        </div>

        {getTotalPrice() > 0 && (
          <NavLink className="navigate-cart" to="/cart">
            {`${Intl.NumberFormat("ru-RU").format(getTotalPrice())} ₸`}
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Menu;