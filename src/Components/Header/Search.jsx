import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import FetchCityWeather from "../../Helpers/FetchCityWeather";
import { useEffect, useState } from "react";

const filter = createFilterOptions();

const Search = ({ setError, setLoading, setWeatherData, setCurrentCity }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const getCityWeather = async (value) => {
      setLoading(true);
      const { data, error } = await FetchCityWeather(value.title);
      if (!error) {
        localStorage.setItem("cityName", data.name);
      }
      setCurrentCity(data.name);
      setError(error);
      setWeatherData(data);
      setLoading(false);
    };
    if (value !== null) {
      getCityWeather(value);
    }
  }, [value]);

  // TODO: Implement search suggestion while typing a city name
  return (
    <Autocomplete
      id="city-search-autocomplete"
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={[]}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Search City" />}
    />
  );
};

export default Search;
