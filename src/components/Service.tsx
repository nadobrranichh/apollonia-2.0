import { Box, Typography } from "@mui/material";
import React from "react";
import { textStyle } from "../styling";
import type { ServiceProps } from "../lists/servicesList";

export const serviceStyles = {
  width: "85%",
  maxWidth: "600px",
  minHeight: "3rem",
  height: { md: "100px" },
  background: "linear-gradient(90deg, #9035d2, rgba(0, 0, 0, 0))",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "start",
  padding: { xs: "0.5rem 0", md: 0 },
};

const splitByLines = function (text: string) {
  return text.split("/").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const Service: React.FC<{ service: ServiceProps }> = ({ service }) => {
  const { title, text, price, priceComment, image, imageStyles } = service;
  return (
    //service
    <Box sx={{ ...serviceStyles, position: image ? "relative" : "static" }}>
      {/*service-description  */}
      <Box
        sx={{
          marginLeft: { xs: "0.7rem", md: "20px" },
          width: { xs: "62%", sm: "70%" },
          maxWidth: "400px",
        }}
      >
        {/* service-title */}
        <Typography
          sx={textStyle(600, { xs: "0.75rem", md: "18px" }, "uppercase")}
          component="p"
        >
          {title}
        </Typography>
        {/* service-text */}
        <Typography
          component="p"
          sx={textStyle(200, { xs: "0.7rem", md: "15px" }, null, "italic")}
        >
          {text?.includes("/") ? splitByLines(text) : text}
        </Typography>
      </Box>

      {/* price-container */}
      <Box sx={{ display: "flex" }}>
        <Typography
          component="p"
          sx={{
            ...textStyle(500, { xs: "1.25rem", md: "25px" }),
            marginRight: priceComment ? "2px" : { xs: "0.7rem", md: "20px" },
          }}
        >
          ${price}
        </Typography>
        {priceComment && (
          <Typography
            component="p"
            sx={{
              ...textStyle(600, "0.5rem"),
              lineHeight: "0.7rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {splitByLines(priceComment)}
          </Typography>
        )}
      </Box>
      {/*       <Box
        component="img"
        src={ApolloniaLogo}
        sx={{ height: "70%", marginRight: "1vw" }}
      ></Box> */}
      {image && <Box component="img" src={image} sx={imageStyles}></Box>}
    </Box>
  );
};

export default Service;
