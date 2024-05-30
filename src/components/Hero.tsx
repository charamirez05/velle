import { Box, Typography } from "@mui/material";

import { accentColor, secondary } from "../constants/colors";
import { useUserStore } from "../store/userStore";

function Hero() {
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "50px", md: "60px" },
          color: secondary,
          fontWeight: "bold",
        }}
      >
        Velle
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: accentColor,
          fontStyle: "italic",
          fontSize: { xs: "15px", md: "20px" },
        }}
      >
        stepping forward by one's own will
      </Typography>
    </Box>
  );
}

export default Hero;
