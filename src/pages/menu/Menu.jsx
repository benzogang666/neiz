import "./Menu.css";

import menu from "../../assets/menu";

import { useState } from "react";

import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

import CC from "../../components/cards/col-card/Col-Card";
import RC from "../../components/cards/row-card/Row-Card";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    activeCategory.subcategories[0]
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
                setActiveCategory(line);
                setActiveSubcategory(line.subcategories[0]);
              }}
              className="category"
            >
              {line.name}
            </div>
          ))}
        </div>

        <div className="sub-categories">
          {activeCategory.subcategories.map((line) => (
            <div
              className={`sub-category ${
                activeSubcategory.slug === line.slug
                  ? "active-sub-category"
                  : ""
              }`}
              onClick={() => setActiveSubcategory(line)}
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
              <CC round={activeSubcategory.items} />
            ) : (
              <RC round={activeSubcategory.items} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
