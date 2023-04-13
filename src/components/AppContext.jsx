import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

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

  function handleSortByChange(sortByOption) {
    setSortBy(sortByOption);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  const business = {
    imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };

  const businesses = [business, business, business, business, business, business];

  const value = {
    term,
    location,
    sortBy,
    sortByOptions,
    // renderSortByOptions,
    getSortByClass,
    handleSortByChange,
    handleTermChange,
    handleLocationChange,
    business,
    businesses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
