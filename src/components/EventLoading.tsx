import { Box, Typography } from "@mui/material";
import { secondary } from "../constants/colors";

export const EventLoading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <Box
        sx={{
          padding: { xs: "10px", md: "20px" },
          margin: { xs: "10px", md: "10px" },
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "25px", md: "30px" },
            color: secondary,
            fontWeight: "bold",
          }}
        >
          Loading...
        </Typography>
      </Box>
    )
  );
};
