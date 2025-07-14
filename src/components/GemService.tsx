// import React from "react";

import { Box, Typography } from "@mui/material";
import { serviceStyles } from "./Service";
import { textStyle } from "../styling";
import ToothGemsImg from "../assets/tooth-gems.png";
import GoldenToothGemsImg from "../assets/golden-tooth-gems.png";

const GemService = () => {
  return (
    //service
    <Box
      sx={{
        ...serviceStyles,
        flexDirection: "column",
        height: null,
        padding: "4px 0",
      }}
    >
      {/* service-gem */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          //   margin: 0,
        }}
      >
        {/* service-description */}
        <Box
          sx={{
            marginLeft: { xs: "0.7rem", md: "20px" },
            width: "70%",
            maxWidth: "400px",
          }}
        >
          {/* service-title */}
          <Typography
            sx={textStyle(600, { xs: "0.75rem", md: "18px" }, "uppercase")}
            component="p"
          >
            Tooth gem {"\u2005"}
            <span className="gem-span">(+$20 for each additional gem)</span>
          </Typography>
          {/* service-text */}
          <Typography
            component="p"
            sx={textStyle(200, { xs: "0.7rem", md: "15px" }, null, "italic")}
          >
            <b>Options:</b> semi-permanent (1-2 years), <br />
            temporary (3-6 months)
            <Box
              component="img"
              src={ToothGemsImg}
              sx={{
                position: "absolute",
                width: { xs: "7.5rem", md: "12rem" },
                marginLeft: { xs: "5px", md: "15px" },
              }}
            ></Box>
          </Typography>
        </Box>
        {/* price */}
        <Typography
          component="p"
          sx={{
            ...textStyle(500, { xs: "1.25rem", md: "25px" }),
            marginRight: { xs: "0.7rem", md: "20px" },
          }}
        >
          $50
        </Typography>
      </Box>
      {/* service-gem */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          //   margin: 0
        }}
      >
        {/* service-description */}
        <Box
          sx={{
            marginLeft: { xs: "0.7rem", md: "20px" },
            width: "70%",
            maxWidth: "400px",
          }}
        >
          {/* service-title */}
          <Typography
            sx={textStyle(600, { xs: "0.75rem", md: "18px" }, "uppercase")}
            component="p"
          >
            Golden tooth gem
            <Box
              component="img"
              src={GoldenToothGemsImg}
              sx={{
                position: "absolute",
                width: { xs: "7.5rem", md: "12rem" },
                marginLeft: { xs: "5px", md: "15px" },
                marginTop: "4px",
              }}
            ></Box>
          </Typography>
          {/* service-text */}
          <Typography
            component="p"
            sx={textStyle(200, { xs: "0.7rem", md: "15px" }, null, "italic")}
          >
            (semi-permanent)
          </Typography>
        </Box>
        {/* price */}
        <Typography
          component="p"
          sx={{
            ...textStyle(500, { xs: "1.25rem", md: "25px" }),
            marginRight: { xs: "0.7rem", md: "20px" },
          }}
        >
          $90
        </Typography>
      </Box>
    </Box>
  );
};
/*
<div class="service">
          <div class="service-gem">
            <div class="service-description">
              <p class="service-title">
                Tooth gem &ThickSpace;
                <span class="gem-span"> (+$20 for each additional gem)</span>
              </p>

              <p class="service-text">
                <b>Options:</b> semi-permanent (1-2 years), <br />
                temporary (3-6 months)
                <img
                  src="assets/images/tooth-gems.png"
                  class="tooth-gems-img"
                  alt=""
                />
              </p>
            </div>
            <p class="price">$50</p>
          </div>
          <div class="service-gem">
            <div class="service-description">
              <p class="service-title">
                Golden tooth gem
                <img
                  src="assets/images/golden-tooth-gems.png"
                  class="tooth-gems-img mt-4px"
                  alt=""
                />
              </p>
              <p class="service-text">(semi-permanent)</p>
            </div>
            <p class="price">$90</p>
          </div>
        </div>
*/

export default GemService;
