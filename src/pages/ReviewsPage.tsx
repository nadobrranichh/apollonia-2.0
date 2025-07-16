// import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Review from "../components/Review";
import { reviewsList, type ReviewProps } from "../lists/reviewsList";
import { textStyle } from "../styling";
import ReviewSwipeButton from "../components/ReviewSwipeButton";
import { useEffect, useRef, useState } from "react";

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

  const [currentColumn, setCurrentColumn] = useState<number>(0);
  useEffect(() => {
    if (currentColumn < 0) setCurrentColumn(2);
    if (currentColumn > 2) setCurrentColumn(0);
  }, [currentColumn]);

  //setting the reviewcolumns' container height
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const children = Array.from(containerRef.current.children);

      // getting heights of the children elements
      const heights = children.map((c) =>
        Number.parseFloat(getComputedStyle(c).height)
      );
      const maxHeight = Math.max(...heights);
      setContainerHeight(maxHeight);
    }
  }, []);

  const renderReviewColumn = function (arr: ReviewProps[], i: number) {
    return (
      <Box
        key={i}
        sx={{
          position: { xs: "absolute", sm: "relative" },
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          transform: {
            xs: `translateX(${100 * (i - currentColumn)}%)`,
            sm: "none",
          },
          transition: "transform 0.5s",
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
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "85%",
              marginBottom: "3rem",
            }}
          >
            <ReviewSwipeButton
              direction="left"
              onClickCallback={() => setCurrentColumn(currentColumn - 1)}
            />
            <Box
              ref={containerRef}
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "304px",
                height: `${containerHeight}px`,
              }}
            >
              {splitArray(reviewsList, 3).map(renderReviewColumn)}
            </Box>
            <ReviewSwipeButton
              direction="right"
              onClickCallback={() => setCurrentColumn(currentColumn + 1)}
            />
          </Box>
        ) : (
          <Box
            sx={{
              overflow: "auto",
              width: { sm: "640px", lg: "1000px" },
              display: "grid",
              gridTemplateColumns: {
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              marginBottom: "3rem",
            }}
          >
            {isTablet && splitArray(reviewsList, 2).map(renderReviewColumn)}

            {isPC && splitArray(reviewsList, 3).map(renderReviewColumn)}
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewsPage;
