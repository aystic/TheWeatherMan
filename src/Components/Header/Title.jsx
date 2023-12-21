import { Typography, Box } from "@mui/material";

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
        src="../../../public/animated-logo.svg"
        style={{
          height: "72px",
        }}
      ></img>
    </Box>
  );
};

export default Title;
