import axios from "axios";

const FetchCityData = async (cityName) => {
  try {
    const uri = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${
      import.meta.env.VITE_OPENWEATHER_API_KEY
    }`;
    const response = await axios.get(uri);
    const data = response.data.map((cityData) => {
      return {
        name: cityData.name,
        lat: cityData.lat,
        lon: cityData.lon,
        state: cityData.state,
        country: cityData.country,
      };
    });
    return { data, error: null };
  } catch (err) {
    console.error(err);
    return { data: [], error: err };
  }
};
export default FetchCityData;
