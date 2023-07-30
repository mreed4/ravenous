import "./SearchBar.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { appState, handleSearch, handleSortByChange, handleTermChange, handleLocationChange, getSortByClass } = useContext(AppContext);

  const { searchTerm, searchLocation, searchSortBy } = appState;

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
        {/* <div className="SearchBar-sort-options">
          <ul>
            {
              Object.keys(searchSortBy).map((sortByOption) => {
                let sortByOptionValue = searchSortBy[sortByOption];
                return (
                  <li
                    key={sortByOptionValue}
                    className={getSortByClass(sortByOptionValue)}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                  </li>
                );
              })
            }
          </ul>
        </div> */}
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
