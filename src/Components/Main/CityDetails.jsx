import { Typography } from "@mui/material";
const CityDetails = ({ weatherData }) => {
  return (
    <Typography variant="h5" component="h2">
      Forecast in{" "}
      <span style={{ fontWeight: "bold" }}>{`${weatherData?.name || ""} ${
        weatherData?.country ? `, ${weatherData?.country}` : ""
      }`}</span>
    </Typography>
  );
};

export default CityDetails;
