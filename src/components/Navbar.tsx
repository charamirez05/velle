import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { accentColor, primary, secondary } from "../constants/colors";
import { Home, Add } from "@mui/icons-material";
import { useState } from "react";
import { useUserStore } from "../store/userStore";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";

function Navbar() {
  const { user } = useUserStore();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    if (Object.keys(user).length !== 0) setOpen(newOpen);
  };
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
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <img style={{ height: "75px" }} src={logo} alt="Velle" />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: { xs: 300, md: 500 } }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  <ListItem
                    key={"fora"}
                    sx={{ justifyContent: "center", display: "flex" }}
                  >
                    <IconButton>
                      <img
                        src={logo}
                        alt="Fora"
                        style={{
                          height: "100px",
                        }}
                      />
                    </IconButton>

                    <Stack direction="column" sx={{ paddingTop: "15px" }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: secondary,
                          fontWeight: "bolder",
                          fontSize: { xs: "45px", md: "65px" },
                        }}
                      >
                        Velle
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontStyle: "italic",
                          color: accentColor,
                          fontSize: { xs: "12px", md: "22px" },
                        }}
                      >
                        stepping forward by one's own will
                      </Typography>
                    </Stack>
                  </ListItem>

                  <Divider />
                  <ListItem key={"home"} disablePadding>
                    <NavLink to="/home" style={{ textDecoration: "none" }}>
                      <Button
                        variant="text"
                        sx={{
                          marginLeft: "15px",
                          fontSize: { xs: "15px", md: "25px" },
                          color: secondary,

                          textTransform: "none",
                        }}
                        startIcon={<Home sx={{ color: accentColor }} />}
                      >
                        Home
                      </Button>
                    </NavLink>
                  </ListItem>
                  <ListItem key={"create"} disablePadding>
                    <NavLink
                      to="/create-event"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="text"
                        sx={{
                          marginLeft: "15px",
                          fontSize: { xs: "15px", md: "25px" },
                          color: secondary,

                          textTransform: "none",
                        }}
                        startIcon={<Add sx={{ color: accentColor }} />}
                      >
                        Create Volunteering Event
                      </Button>
                    </NavLink>
                  </ListItem>
                  <ListItem key={"view"} disablePadding>
                    <NavLink to="/events/all">
                      <Button
                        variant="text"
                        sx={{
                          marginLeft: "15px",
                          fontSize: { xs: "15px", md: "25px" },
                          color: secondary,

                          textTransform: "none",
                        }}
                        startIcon={
                          <ViewComfyAltIcon sx={{ color: accentColor }} />
                        }
                      >
                        View All Events
                      </Button>
                    </NavLink>
                  </ListItem>
                </List>
                <Divider />
              </Box>
            </Drawer>

            <NavLink
              to={Object.keys(user).length === 0 ? "/" : "/home"}
              style={{ textDecoration: "none" }}
            >
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
            </NavLink>
          </Stack>

          {Object.keys(user).length === 0 ? (
            <Box>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: secondary,
                }}
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </Button>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: secondary,
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          ) : (
            <>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: secondary,
                }}
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
