import { Box, Typography } from "@mui/material";
// import React from "react";
import { textStyle } from "../utils/styling";
import type { ReviewProps } from "../lists/reviewsList";
import QuoteIcon from "../assets/quote-22-double-open.svg";
import StarIcon from "../assets/star-svgrepo-com.svg";

const Review: React.FC<{ review: ReviewProps }> = ({ review }) => {
  const { name, avatarUrl, reviewText, rating } = review;

  return (
    <Box
      sx={{
        maxWidth: "380px",
        minWidth: "230px",
        borderRadius: "15px",
        bgcolor: "#25102e",
        textAlign: "center",
        padding: "1rem 1rem",
      }}
    >
      <img
        src={QuoteIcon}
        alt="icon"
        style={{ width: "24px", height: "24px" }}
      />
      <Typography
        sx={{
          ...textStyle(400, "0.7rem"),
          marginBottom: "0.9rem",
          marginTop: "0.5rem",
          maxWidth: "250px",
        }}
        dangerouslySetInnerHTML={{ __html: reviewText }}
      />
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          component="img"
          src={avatarUrl}
          sx={{
            height: "1.8rem",
            width: "1.8rem",
            borderRadius: "50%",
            alignSelf: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "0.3rem",
          }}
        >
          <Typography sx={textStyle(null, "0.8rem")}>{name}</Typography>
          <Typography sx={textStyle(null, "0.8rem")}>
            {rating}
            <img
              src={StarIcon}
              alt="icon"
              style={{ width: "12px", color: "yellow" }}
            />{" "}
            review, {"\u2005"}
            <a
              style={{ color: "white" }}
              href="https://www.google.com/maps/place/821+Eglinton+Ave+W,+Toronto,+ON+M5N+1E6,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@43.7009396,-79.425269,21z/data=!4m6!3m5!1s0x882b330aae3c9813:0x3ec0b80f2cde8279!8m2!3d43.7009369!4d-79.4250718!16s%2Fg%2F11bw3h3mgt?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            >
              Google maps
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;

/*
    <div class="review">
      <i class="fa-solid fa-quote-left"></i>
      <p class="review-text">
        "${review}"
      </p>
      <div class="review-info">
        <img src="${avatarUrl}" alt="" class="review-img" />
        <div class="review-author-info">
          <p class="review-author">${name}</p>
          <p class="review-description">
            5 <i style="color: #ffdb00" class="fa fa-star"></i> review,
            <a style="color: white" href="https://www.google.com/maps/place/821+Eglinton+Ave+W,+Toronto,+ON+M5N+1E6,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@43.7009396,-79.425269,21z/data=!4m6!3m5!1s0x882b330aae3c9813:0x3ec0b80f2cde8279!8m2!3d43.7009369!4d-79.4250718!16s%2Fg%2F11bw3h3mgt?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
              Google Maps
            </a>
          </p>
        </div>
      </div>
    </div>
*/
