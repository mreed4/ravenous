import { createContext, useState } from "react";
import { config } from "../util/config.js";
const { API_KEY } = config;

const AppContext = createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");
  const [businesses, setBusinesses] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function getSortByClass(sortByOption) {
    if (sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  function renderSortByOptions() {
    // ** When used as context, this function causes an error **
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={handleSortByChange(sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  function handleSortByChange(sortByOption) {
    setSortBy(sortByOption);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  }

  function searchYelp(searchTerm, searchLocation, searchSortBy) {
    console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${searchSortBy}`);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&sort_by=${searchSortBy}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.businesses);
        setBusinesses(data.businesses);
        setSearchParams(`"${searchTerm}" in ${searchLocation}`);
        setLocation("");
        setTerm("");
      });
  }

  const value = {
    term,
    location,
    businesses,
    searchParams,
    sortByOptions,
    getSortByClass,
    handleSortByChange,
    handleTermChange,
    handleLocationChange,
    handleSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
