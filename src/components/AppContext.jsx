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

  const { searchTerm, searchLocation, searchSortBy } = appState;

  function handleSortByChange(sortByOption) {
    setAppState((prev) => ({ ...prev, searchSortBy: sortByOption }));

    searchYelp();
  }

  function handleTermChange(event) {
    const {
      target: { value: term },
    } = event;
    setAppState((prev) => ({ ...prev, searchTerm: term }));
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

    setAppState((prev) => ({
      ...prev,
      searchParams: `Searching for ${searchTerm} in ${searchLocation}`,
      // searchTerm: "",
      // searchLocation: "",
    }));
  }

  async function searchYelp() {
    if (!searchTerm || !searchLocation) {
      return;
    }

    const URL = `${netlify}/search?term=${searchTerm}&location=${searchLocation}&sort_by=${searchSortBy}`;

    const response = await fetch(URL);
    const data = await response.json();
    const { businesses } = data;

    setAppState((prev) => ({ ...prev, businesses }));
  }

  const value = {
    appState,
    setAppState,
    handleSortByChange,
    handleTermChange,
    handleLocationChange,
    handleSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
