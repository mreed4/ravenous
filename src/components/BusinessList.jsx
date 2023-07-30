import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

import "../assets/css/BusinessList.css";

import Business from "./Business";

export default function BusinessList() {
  const { appState } = useContext(AppContext);

  const { businesses, searchParams } = appState;

  useEffect(() => {}, [businesses]);

  return businesses.length >= 1 ? (
    <div>
      <p className="search-parameters">{searchParams}</p>
      <ol className="BusinessList">
        {businesses.map((business) => {
          return (
            <li key={business.alias}>
              <Business business={business} />
            </li>
          );
        })}
      </ol>
    </div>
  ) : (
    <div className="search-parameters">Search for something!</div>
  );
}
