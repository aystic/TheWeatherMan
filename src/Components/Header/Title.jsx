import { Typography, Box } from "@mui/material";
import HeaderImageUrl from "../../../public/animated-logo.svg";

const Title = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" component="h1" display="inline">
        The Weather Man
      </Typography>
      <img
        src={HeaderImageUrl}
        style={{
          height: "72px",
        }}
      ></img>
    </Box>
  );
};

export default Title;
