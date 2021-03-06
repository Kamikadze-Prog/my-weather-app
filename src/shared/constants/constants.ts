export default {
  weatherURL: process.env.NEXT_PUBLIC_API_URL_WEATHER,
  forecastURL: process.env.NEXT_PUBLIC_API_URL_FORECAST,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  metric: "metric",

  request: {
    city: "?q=",
    key: "&appid=",
    temp: "&units="
  }
};
