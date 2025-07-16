import { IconButton } from "@mui/material";
import React from "react";
import ArrowLeftSvg from "../assets/arrow-left.svg";
import ArrowRightSvg from "../assets/arrow-right.svg";

interface ReviewSwipeButtonProps {
  direction: string;
  onClickCallback: () => void;
}

const ReviewSwipeButton: React.FC<ReviewSwipeButtonProps> = ({
  direction,
  onClickCallback,
}: ReviewSwipeButtonProps) => {
  return (
    <IconButton
      onClick={onClickCallback}
      disableRipple
      sx={{ borderRadius: "35%", bgcolor: "#25102e", zIndex: 1000 }}
    >
      {direction === "left" ? (
        <img
          src={ArrowLeftSvg}
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
      ) : (
        <img
          src={ArrowRightSvg}
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
      )}
    </IconButton>
  );
};

export default ReviewSwipeButton;
