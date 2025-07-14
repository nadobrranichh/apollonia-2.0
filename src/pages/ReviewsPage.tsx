// import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Review from "../components/Review";
import { reviewsList, type ReviewProps } from "../lists/reviewsList";
import { textStyle } from "../styling";

const ReviewsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); //up to 600
  //? idk about the name here lmao
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isPC = useMediaQuery(theme.breakpoints.up("lg"));

  //splits array into an array arrays, equal* by number of elements in each of them,
  // depending on an into argument: into = 2 -> [[], []] and so on
  const splitArray = function <T>(array: T[], into: number) {
    const resultArray = [];
    for (let i = 0; i < into; i++) resultArray.push([] as T[]);
    let indexArray = 0;
    for (let el of array) {
      resultArray[indexArray].push(el);
      if (indexArray !== into - 1) indexArray++;
      else indexArray = 0;
    }
    return resultArray;
  };

  const renderReviewColumn = function (arr: ReviewProps[], i: number) {
    return (
      <Box
        key={i}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        {arr.map((r) => (
          <Review key={r.id} review={r} />
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "#c36fff",
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
            color: "black",
          }}
        >
          Reviews
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", sm: "640px", lg: "1000px" },
            display: { xs: "flex", sm: "grid" },
            flexDirection: { xs: "column", sm: null },
            alignItems: { xs: "center", sm: "start" },
            gridTemplateColumns: {
              xs: null,
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },

            marginBottom: "3rem",
            gap: { xs: "1.5rem", sm: 0 },
          }}
        >
          {isMobile &&
            reviewsList
              .slice(0, 3)
              .map((r) => <Review key={r.id} review={r} />)}

          {isTablet && splitArray(reviewsList, 2).map(renderReviewColumn)}

          {isPC && splitArray(reviewsList, 3).map(renderReviewColumn)}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewsPage;
