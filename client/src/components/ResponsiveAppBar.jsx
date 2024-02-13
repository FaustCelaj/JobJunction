import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import AuthService from "../utils/auth";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    AuthService.loggedIn()
  );

  const pages = ["Home", "Search"];
  const authPages = isAuthenticated
    ? ["Profile", "Logout"]
    : ["SignUp", "Login"];

  React.useEffect(() => {
    // Update component state on auth state changes
    const checkAuth = () => {
      setIsAuthenticated(AuthService.loggedIn());
    };

    checkAuth();

    return () => {};
  }, []);

  const handleAuthAction = (page) => () => {
    if (page === "Logout") {
      AuthService.logout();
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOB JUNCTION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                component={RouterLink}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {authPages.map((page) => (
              <Button
                key={page}
                onClick={handleAuthAction(page)}
                sx={{ my: 2, color: "white", display: "block", ml: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
