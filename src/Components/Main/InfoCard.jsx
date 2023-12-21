import {
  Stack,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import CloudIcon from "@mui/icons-material/Cloud";

const WEATHER_DATA_POINTS = [
  { text: "Visibility", icon: <VisibilityIcon /> },
  { text: "Pressure", icon: <CompressIcon /> },
  { text: "Wind", icon: <AirIcon /> },
  { text: "Humidity", icon: <WaterIcon /> },
  { text: "Cloudiness", icon: <CloudIcon /> },
];
const InfoCard = ({ weatherData }) => {
  return (
    <Card>
      <List>
        {WEATHER_DATA_POINTS.map((detail, idx) => {
          let value = null;
          switch (detail.text) {
            case "Visibility": {
              value = weatherData?.visibility / 1000 + " km";
              break;
            }
            case "Pressure": {
              value = weatherData?.main?.pressure + " hPa";
              break;
            }
            case "Wind": {
              value = weatherData?.wind?.speed + " m/s";
              break;
            }
            case "Humidity": {
              value = weatherData?.main?.humidity + " %";
              break;
            }
            case "Cloudiness": {
              value = weatherData?.clouds?.all + " %";
              break;
            }
          }
          return (
            <Box key={idx}>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        style={{
                          marginRight: "8px",
                        }}
                      >
                        <Typography variant="h6" component="p">
                          {detail.text}
                        </Typography>
                        <Typography variant="h6" component="p">
                          {value}
                        </Typography>
                      </Stack>
                    </>
                  }
                />
                <ListItemIcon>{detail.icon}</ListItemIcon>
              </ListItem>
              {idx < 4 && <Divider />}
            </Box>
          );
        })}
      </List>
    </Card>
  );
};

export default InfoCard;
