import "./Business.css";

export default function Business({ business }) {
  return (
    <div className="Business">
      <img src={business.image_url} alt={business.name} />
      <h2>
        <a href={business.url} target="_blank">
          {business.name}
        </a>
      </h2>
      {/* <ul className="Business-categories">
        {business.categories.map((category) => {
          return <li key={category.alias}>{category.title}</li>;
        })}
      </ul> */}
      <div className="Business-information">
        <div className="Business-address">
          <span>{business.location.address1}</span>
          <span>{business.location.city}</span>
          <span>
            {business.location.state} {business.location.zip_code}
          </span>
        </div>
        <div className="Business-reviews">
          <span className="rating">{business.rating} stars</span>
          <span>{business.review_count} reviews</span>
        </div>
      </div>
    </div>
  );
}
