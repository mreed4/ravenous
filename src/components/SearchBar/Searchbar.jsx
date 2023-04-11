import "./SearchBar.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { term, location, handleTermChange, handleLocationChange, renderSortByOptions } = useContext(AppContext);

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input value={term} onChange={handleTermChange} placeholder="Search Businesses" />
        <input value={location} onChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
  );
}
