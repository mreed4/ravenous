import "./BusinessList.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import Business from "../Business/Business";

export default function BusinessList() {
  const { businesses, searchParams } = useContext(AppContext);

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
