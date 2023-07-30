async function handler(event) {
  const { term: searchTerm, location, sort_by: searchSortBy } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;

  const endpoint = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${searchSortBy}`;
  const options = {
    headers: {
      // accept: "application/json",
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
