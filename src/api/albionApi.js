import axios from "axios";

const API =
  "https://west.albion-online-data.com/api/v2/stats/prices";

export async function fetchMarketData(items, cities) {
  try {
    const response = await axios.get(API, {
      params: {
        items: items.join(","),
        locations: cities.join(","),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);

    return [];
  }
}