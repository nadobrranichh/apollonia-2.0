// import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { textStyle } from "../styling";
import IMG_2779 from "../assets/IMG_2779.JPG";
import IMG_2780s from "../assets/IMG_2780-s.jpg";
import IMG_2779s from "../assets/IMG_2779-s.jpg";
import IMG_2777s from "../assets/IMG_2777-s.jpg";

const HomePage = () => {
  const theme = useTheme();
  //if the viewport width is less than 900px
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          textAlign: "center",
          padding: "6% 0",
        }}
      >
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                width: "85%",
              }}
            >
              <Box
                component="img"
                src={IMG_2780s}
                sx={{ height: "15rem", borderRadius: "1.5rem" }}
              ></Box>
              <Typography
                sx={{
                  ...textStyle(null, "0.9rem"),
                }}
              >
                Nataliia is an experienced dental hygienist (5 years),
                recognized for her groundbreaking invention, the painless teeth
                whitening method known as “Apollonia.”
              </Typography>
            </Box>
            <Box
              component="img"
              src={IMG_2777s}
              sx={{ width: "85%", borderRadius: "1.5rem" }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                width: "85%",
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  ...textStyle(null, "0.9rem"),
                }}
              >
                Originally from Ukraine and educated in Canada, she is committed
                to making every dental procedure a comfortable and relaxing
                experience for her clients.
              </Typography>
              <Box
                component="img"
                src={IMG_2779s}
                sx={{ height: "15rem", borderRadius: "1.5rem" }}
              ></Box>
            </Box>
          </Box>
        ) : (
          <>
            <Typography
              sx={{
                ...textStyle(null, "1.1rem"),
                paddingBottom: "3%",
              }}
            >
              Nataliia is an experienced dental hygienist (5 years), <br />{" "}
              recognized for her groundbreaking invention, <br /> the painless
              teeth whitening method known as “Apollonia.”
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <Typography sx={textStyle(null, "1.1rem")}>
                Originally from Ukraine and educated in Canada, <br /> she is
                committed to making every dental procedure <br /> a comfortable
                and relaxing experience <br /> for her clients.
              </Typography>
              <Box
                component="img"
                src={IMG_2779}
                sx={{ height: "20rem", borderRadius: "1.5rem" }}
              ></Box>
            </Box>
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
