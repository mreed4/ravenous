// const sdk = require("api")("@yelp-developers/v1.0#259liblkmeph7e");

async function handler(event) {
  const { query: searchTerm, location } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;

  // const auth = await sdk.auth(`Bearer ${API_KEY}`)
  // const response = await sdk.v3_businesses_search({location: location, term: searchTerm})

  const endpoint = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const response = await fetch(endpoint, options);
  const businesses = await response.json();

  if (!response.ok) {
    return { statusCode: response.status, body: JSON.stringify(response.statusText) };
  }

  try {
    return {
      statusCode: response.status,
      body: JSON.stringify(businesses),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) };
  }
}

module.exports = { handler };
