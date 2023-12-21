import { Card, Stack, Typography, Box } from "@mui/material";
const WeatherDataCard = ({ weatherData }) => {
  return (
    <Card
      style={{
        height: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{
          width: "85%",
        }}
      >
        <Box>
          <Typography variant="h3" component="p">
            {Math.round(weatherData?.main?.temp)}&deg;C
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography variant="body" component="p" display="inline">
              High{" "}
            </Typography>
            <Typography variant="h5" component="p" display="inline">
              {Math.round(weatherData?.main?.temp_max)}&deg;C
            </Typography>
          </Box>
          <Box>
            <Typography variant="body" component="p" display="inline">
              Low{" "}
            </Typography>
            <Typography variant="h5" component="p" display="inline">
              {Math.round(weatherData?.main?.temp_min)}&deg;C
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{
          width: "85%",
        }}
      >
        <Box>
          <Typography variant="h6" component="p">
            {weatherData?.weather[0]?.main}
          </Typography>
          <Typography variant="body" component="p">
            Feels like {Math.round(weatherData?.main?.feels_like)}&deg;C
          </Typography>
        </Box>
        <Box>
          <img
            src={`./public/weather-icons/${weatherData?.weather[0]?.icon}.svg`}
            style={{
              height: "128px",
            }}
          ></img>
        </Box>
      </Stack>
    </Card>
  );
};

export default WeatherDataCard;
