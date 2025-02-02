import "./Search.css";
import { useState } from "react";
import menu from "../../assets/menu"
import SRC from "../../components/cards/col-card/Col-Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    if (!searchQuery) return setResults([]);

    setResults(
      menu.categories.flatMap((category) =>
        category.subcategories.flatMap((subcategory) =>
          subcategory.items.filter((item) =>
            [item.name, item.details, item.ingredients.join(",")].some(
              (field) => field.toLowerCase().includes(searchQuery)
            )
          )
        )
      )
    );
  };

  return (
    <div className="search">
      <input
        className="search-field"
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Введите название блюда..."
      />
      {query && results.length > 0 && (
        <div className="search-reservoir">
          <SRC round={results} />
        </div>
      )}
    </div>
  );
};

export default Search;