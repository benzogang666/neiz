import "./Search.css";

import { useState } from "react";

import menu from "../../assets/menu";

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
                [i.name, i.details, i.ingredients.join(",")].some((f) =>
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
        <div className="navigate">
          <IoMdArrowRoundBack className="navigate"/>
        </div>
        <input
          className="search-field"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Введите название блюда..."
        />
      </div>

      <div className="search-reservoir">
        {query && results.length > 0 && <RC round={results} />}
      </div>
    </div>
  );
};

export default Search;
