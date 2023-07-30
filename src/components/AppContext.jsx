import { createContext, useState } from "react";

const AppContext = createContext();

const netlify = "/.netlify/functions";

function AppProvider({ children }) {
  const [appState, setAppState] = useState({
    searchTerm: "",
    searchLocation: "",
    searchSortBy: "best_match",
    businesses: [],
    searchParams: "",
  });

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function getSortByClass(sortByOption) {
    const { searchSortBy } = appState;
    if (searchSortBy === sortByOption) {
      return "active";
    } else {
      return null;
    }
  }

  function handleSortByChange(sortByOption) {}

  function handleTermChange(event) {
    setAppState({ ...appState, searchTerm: event.target.value });
  }

  function handleLocationChange(event) {
    const {
      target: { value: location },
    } = event;
    setAppState({ ...appState, searchLocation: location });
  }

  function handleSearch(event) {
    event.preventDefault();
    searchYelp();

    const { searchTerm, searchLocation } = appState;

    setAppState({
      ...appState,
      searchParams: `Searching for ${searchTerm} in ${searchLocation}`,
    });
  }

  async function searchYelp() {
    const { searchTerm, searchLocation, searchSortBy } = appState;

    if (!searchTerm || !searchLocation) {
      return;
    }

    const URL = `${netlify}/search?term=${searchTerm}&location=${searchLocation}`;

    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
  }

  const value = {
    appState,
    setAppState,
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
