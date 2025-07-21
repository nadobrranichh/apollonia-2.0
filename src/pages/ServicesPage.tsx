// import React from "react";

import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { servicesList } from "../lists/servicesList";
import Service from "../components/Service";
import GemService from "../components/GemService";
import { textStyle } from "../utils/styling";
import React from "react";

const ServicesPage = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            ...textStyle(500, "40px", "uppercase"),
            margin: "20px 0",
            fontFamily: "Times New Roman",
          }}
        >
          Price List
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", sm: "75%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "50px",
            gap: "1rem",
          }}
        >
          {servicesList.map((s, i) => {
            return (
              <React.Fragment key={s.id}>
                <Service service={s} />
                {i === 4 && <GemService />}
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ServicesPage;
