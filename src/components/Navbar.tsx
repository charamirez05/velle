import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { primary, secondary } from "../constants/colors";

function Navbar() {
  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: primary }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton>
              <img style={{ height: "55px" }} src={logo} alt="Fora" />
            </IconButton>

            <Typography
              variant="h5"
              sx={{
                color: secondary,
                fontSize: "30px",
                fontWeight: "bolder",
              }}
            >
              Velle
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
