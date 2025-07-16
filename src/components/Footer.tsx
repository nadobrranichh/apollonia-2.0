import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { textStyle } from "../styling";
import { socialsList } from "../lists/socialsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Instagram, Facebook, YouTube } from "@mui/icons-material";
// import TikTokIcon from "./TiktokIcon";
// import React from "react";

const liStyles = {
  fontFamily: "Poppins, Arial",
  color: "#c36fff",
  fontSize: "0.9rem",
};

const liLinkStyles = {
  textDecoration: "none",
  color: "#c36fff",
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "#25102e",
        color: "#9035d2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        paddingTop: "2.5rem",
      }}
    >
      <Typography
        component="p"
        sx={{
          ...textStyle(550, "1.3rem", "uppercase"),
          marginBottom: "0.65rem",
        }}
      >
        Follow
      </Typography>
      <Box
        sx={{
          width: "65%",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {socialsList.map((s) => {
          //   const Icon = s.icon;
          return (
            <Link
              key={s.platform}
              href={s.url}
              target="_blank"
              sx={{
                height: "50px",
                width: "50px",
                bgcolor: "#c36fff",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.35s",
                color: "#25102e",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "#f6b1ff",
                },
              }}
            >
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </Link>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", gap: "2.5rem", marginTop: "1.5rem" }}>
        <List sx={{ listStyle: "none" }}>
          <ListItem sx={{ padding: 0 }}>
            {/* title */}
            <Typography
              component="p"
              sx={textStyle(600, "1.2rem", "uppercase")}
            >
              To book:
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* subtitle */}
            <Typography component="p" sx={textStyle(null, "0.9rem")}>
              DM on insta or FB
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* subtitle */}
            <Typography component="p" sx={textStyle(null, "0.9rem")}>
              Call:
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              +1 647 514 1552
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* subtitle */}
            <Typography component="p" sx={textStyle(null, "0.9rem")}>
              Email:
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              nshchepaniak@hotmail.com
            </Typography>
          </ListItem>
        </List>
        <List sx={{ listStyle: "none" }}>
          <ListItem sx={{ padding: 0 }}>
            {/* title */}
            <Typography
              component="p"
              sx={textStyle(600, "1.2rem", "uppercase")}
            >
              Navigate
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              <Link href="/" sx={liLinkStyles}>
                About
              </Link>
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              <Link href="/location" sx={liLinkStyles}>
                Location
              </Link>
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              <Link href="/services" sx={liLinkStyles}>
                Services
              </Link>
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              <Link href="/reviews" sx={liLinkStyles}>
                Reviews
              </Link>
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            {/* li */}
            <Typography component="p" sx={liStyles}>
              <Link href="/" sx={liLinkStyles}>
                Shop
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Typography
        sx={{
          marginTop: "2rem",
          marginBottom: "30px",
          fontFamily: "Poppins, Arial",
          fontWeight: 400,
          fontSize: "0.9rem",
          color: "#c36fff",
        }}
      >
        © Apollonia, 2025
      </Typography>
    </Box>
  );
};

export default Footer;
