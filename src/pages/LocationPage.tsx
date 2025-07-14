// import React from "react";

import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { textStyle } from "../styling";

const LocationPage = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "4vh",
        }}
      >
        <Typography sx={textStyle(500, "23px")} component="p">
          My Location: <br /> 821 Eglinton Ave W, Toronto <br /> ON M5N 1E6,
          Canada
        </Typography>
        <Box
          sx={{
            margin: "3vh 0",
            width: {
              xs: "85%",
              md: "75%",
              lg: "60%",
            },
            height: {
              xs: "300px",
              md: "600px",
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.1156222969039!2d-79.42507180000003!3d43.7009369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc3ae490fe4b65%3A0xc5ee99956777f13e!2sApollonia%20Preventative%20Dental%20Care!5e0!3m2!1sen!2sua!4v1744016825863!5m2!1sen!2sua"
            style={{
              border: 0,
              height: "100%",
              width: "100%",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-embed"
          ></iframe>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LocationPage;
