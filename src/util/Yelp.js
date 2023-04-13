import { config } from "./config";
const { API_KEY } = config;

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    )
      .then((response) => response.json())
      .then((data) => data.businesses && console.log(data));
  },
};
