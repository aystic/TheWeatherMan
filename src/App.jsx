import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Title from "./Components/Header/Title";
import Search from "./Components/Header/Search";
import InfoCard from "./Components/Main/InfoCard";
import WeatherDataCard from "./Components/Main/WeatherDataCard";
import CityDetails from "./Components/Main/CityDetails";
import FetchCityWeather from "./Helpers/FetchCityWeather";

import { useEffect, useState } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    const getCityWeather = async (value) => {
      setLoading(true);
      const { data, error } = await FetchCityWeather(value);
      setCurrentCity(data.name);
      setError(error);
      setWeatherData(data);
      setLoading(false);
    };
    if (localStorage.getItem("cityName")) {
      getCityWeather(localStorage.getItem("cityName"));
    }
  }, []);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "95vw",
          padding: "10px",
        }}
      >
        <Card
          style={{
            padding: "12px",
            background: "lightblue",
          }}
        >
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={{ md: "space-between", xs: "space-around" }}
            alignItems={{ xs: "center" }}
          >
            <Title />
            <Search
              setError={setError}
              setLoading={setLoading}
              setWeatherData={setWeatherData}
              setCurrentCity={setCurrentCity}
              currentCity={currentCity}
            />
          </Stack>
        </Card>
        <Card
          style={{
            padding: "12px",
            background: "lightblue",
            marginTop: "10px",
          }}
        >
          <Grid
            container
            columnSpacing={{ xl: 6, lg: 4, md: 2, xs: 1 }}
            rowSpacing={2}
            columns={14}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading ? (
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    size={40}
                    thickness={4}
                  />
                </Stack>
              </Grid>
            ) : error ? (
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" component="p" color="red">
                    Failed to get weather data, Please try again!
                  </Typography>
                </Stack>
              </Grid>
            ) : weatherData ? (
              <>
                <Grid item xs={12}>
                  <CityDetails weatherData={weatherData} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <WeatherDataCard weatherData={weatherData} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InfoCard weatherData={weatherData} />
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" component="p">
                    Search for a city view the weather info!
                  </Typography>
                </Stack>
              </Grid>
            )}
          </Grid>
        </Card>
      </Paper>
    </Stack>
  );
};

export default App;
