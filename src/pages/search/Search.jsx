import "./Search.css";

import menu from "../../assets/menu";

import { useState } from "react";

import { NavLink } from "react-router";

import RC from "../../components/cards/row-card/Row-Card";

import { IoMdArrowRoundBack } from "react-icons/io";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    setResults(
      searchQuery
        ? menu.categories.flatMap((c) =>
            c.subcategories.flatMap((s) =>
              s.items.filter((i) =>
                [i.name, i.details].some((f) =>
                  f.toLowerCase().includes(searchQuery)
                )
              )
            )
          )
        : []
    );
  };

  return (
    <div className="search">
      <div className="search-dashboard">
        <NavLink className="navigate" to="/menu">
          <IoMdArrowRoundBack className="navigate" />
        </NavLink>
        <input
          className="search-field"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Введите название блюда..."
          autoFocus
        />
      </div>

      <div className="search-reservoir">
        {query && results.length > 0 && <RC round={results} />}
      </div>
    </div>
  );
};

export default Search;