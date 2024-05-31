import { Box, Typography } from "@mui/material";
import { secondary } from "../constants/colors";

export const EventLoading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="150vh"
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "25px", md: "35px" },
              color: secondary,
              fontWeight: "bold",
            }}
          >
            Loading...
          </Typography>
        </Box>
      </Box>
    )
  );
};
