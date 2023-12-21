import axios from "axios";
import FetchCityData from "./FetchCityData";

const FetchCityWeather = async (searchKey) => {
  try {
    const { data, error } = await FetchCityData(searchKey);
    if (error) {
      throw new Error(error);
    }
    const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${
      data[0]?.lat
    }&lon=${data[0]?.lon}&units=metric&appid=${
      import.meta.env.VITE_OPENWEATHER_API_KEY
    }`;
    const weatherData = await axios.get(uri);
    return { data: { ...weatherData.data, ...data[0] }, error: false };
  } catch (err) {
    console.error(err);
    return { data: [], error: true };
  }
};
export default FetchCityWeather;
