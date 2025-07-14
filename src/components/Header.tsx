import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApolloniaLogo from "../assets/logo.png";
import { headerList } from "../lists/headerList";
import { useLocation } from "react-router-dom";
import HamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import React, { useState } from "react";

const listItemStyles = {
  fontSize: "20px",
  fontFamily: "Poppins, Arial",
  textTransform: "uppercase",
  transition: "all 0.4s",
  color: "white",
  "&:hover": {
    color: "#a85ec8",
    cursor: "pointer",
  },
  padding: "0 3px",
  lineHeight: "1.5rem",
};

const headerStyles = {
  top: 0,
  left: 0,
  right: 0,
  bgcolor: "#3a0b59",
  height: { xs: "120px", md: "170px" },
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
};

const Header = () => {
  const location = useLocation();
  console.log(location);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const [isDrawerClosed, setIsDrawerClosed] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <Box
      component="header"
      sx={{
        ...headerStyles,
        justifyContent: isMobile ? "space-between" : "center",
      }}
    >
      <Box
        component="img"
        src={ApolloniaLogo}
        sx={{ height: "70%", marginRight: "1vw" }}
      ></Box>
      {isMobile ? (
        <React.Fragment>
          <IconButton
            aria-label="hamburger menu"
            sx={{
              // border: "white 1px solid",
              padding: 0,
            }}
            disableRipple
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <img
              src={HamburgerMenuIcon}
              alt="icon"
              style={{ width: "50px", height: "50px" }}
            />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(!isDrawerOpen)}
            onOpen={() => setIsDrawerOpen(!isDrawerOpen)}
            slotProps={{
              backdrop: { sx: { bgcolor: "transparent" } },
              paper: { sx: { bgcolor: "#25102e" } },
            }}
          >
            <List
              sx={{
                width: "200px",
                paddingTop: "10%",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {headerList.map((item) => (
                <ListItem key={item.title}>
                  <Link href={item.url} sx={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        ...listItemStyles,
                        borderBottom:
                          location.pathname === item.url
                            ? "1px solid white"
                            : "",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </React.Fragment>
      ) : (
        <List sx={{ bgcolor: "transparent", display: "flex", gap: "0.6vw" }}>
          {headerList.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.url} sx={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    ...listItemStyles,
                    borderBottom:
                      location.pathname === item.url ? "1px solid white" : "",
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Header;
