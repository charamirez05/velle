import { Box, Typography } from "@mui/material";

import { secondary } from "../constants/colors";
import { useUserStore } from "../store/userStore";

function Hero() {
  const { user, addUser } = useUserStore();

  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h1">
        {Object.keys(user).length === 0 ? "yehey" : user.name}
      </Typography>
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
          color: secondary,
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
