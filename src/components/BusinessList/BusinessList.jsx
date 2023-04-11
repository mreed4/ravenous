import "./BusinessList.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import Business from "../Business/Business";

export default function BusinessList() {
  const { businesses } = useContext(AppContext);

  return (
    <div className="BusinessList">
      {businesses.map((business, i) => {
        return <Business key={i} business={business} />;
      })}
    </div>
  );
}
