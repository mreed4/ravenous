import "./BusinessList.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import Business from "../Business/Business";

export default function BusinessList() {
  const { businesses } = useContext(AppContext);

  return businesses.length >= 1 ? (
    <div className="BusinessList">
      {businesses.map((business) => {
        return <Business key={business.alias} business={business} />;
      })}
    </div>
  ) : (
    <div className="BusinessList">First you need to find a business</div>
  );
}
