import "../assets/css/Business.css";

export default function Business({ business }) {
  const { alias, image_url, name, url, categories, location, review_count, rating } = business;
  const { address1, city, state, zip_code } = location;

  return (
    <div className="Business">
      <img src={image_url} alt={name} />
      <h2>
        <a href={url} target="_blank">
          {name}
        </a>
      </h2>
      {/* <ul className="Business-categories">
        {business.categories.map((category) => {
          return <li key={category.alias}>{category.title}</li>;
        })}
      </ul> */}
      <div className="Business-information">
        <div className="Business-address">
          <span>{address1}</span>
          <span>{city}</span>
          <span>
            {state} {zip_code}
          </span>
        </div>
        <div className="Business-reviews">
          <span className="rating">{rating} stars</span>
          <span>{review_count} reviews</span>
        </div>
      </div>
    </div>
  );
}
