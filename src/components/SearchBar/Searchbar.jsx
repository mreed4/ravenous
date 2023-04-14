import "./SearchBar.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { term, location, sortByOptions, getSortByClass, handleSortByChange, handleTermChange, handleLocationChange, handleSearch } =
    useContext(AppContext);

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
        <div className="SearchBar-sort-options">
          <ul>
            {
              /* Previously this was a call to a function from context */
              Object.keys(sortByOptions).map((sortByOption) => {
                let sortByOptionValue = sortByOptions[sortByOption];
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
        </div>
        <div className="SearchBar-fields">
          <input type="text" value={term} onChange={handleTermChange} placeholder="Search Businesses" />
          <input type="text" value={location} onChange={handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button type="submit" onClick={handleSearch} disabled={!term || !location}>
            Let's Go
          </button>
        </div>
      </form>
    </div>
  );
}
