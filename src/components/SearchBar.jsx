import { useContext } from "react";
import { AppContext } from "./AppContext";

import "../assets/css/SearchBar.css";

export default function SearchBar() {
  const { appState, handleSearch, handleSortByChange, handleTermChange, handleLocationChange } = useContext(AppContext);

  const { searchTerm, searchLocation, searchSortBy } = appState;

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const getSortByClass = (sortByOption) => (searchSortBy === sortByOption ? "active" : null);

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
        <div className="SearchBar-sort-options">
          <ul>
            {Object.keys(sortByOptions).map((sortByOption) => {
              let sortByOptionValue = sortByOptions[sortByOption];
              return (
                <li key={sortByOption} className={getSortByClass(sortByOptionValue)} onClick={() => handleSortByChange(sortByOptionValue)}>
                  {sortByOption}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input type="text" value={searchTerm} onChange={handleTermChange} placeholder="Search Businesses" />
          <input type="text" value={searchLocation} onChange={handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button type="submit" onClick={handleSearch} disabled={!searchTerm || !searchLocation}>
            Let's Go
          </button>
        </div>
      </form>
    </div>
  );
}
