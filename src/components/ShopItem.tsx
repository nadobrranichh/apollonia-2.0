import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import { textStyle } from "../utils/styling";
import type { ShopItemProps } from "../lists/shopItemsList";
import { PAGES } from "../constants/pages-constants";

const ShopItem: React.FC<{ item: ShopItemProps }> = ({ item }) => {
  const [hoverVisibility, setHoverVisibility] = useState<boolean>(false);
  return (
    <Link href={`${PAGES.SHOPITEM}/${item.id}`} sx={{ textDecoration: "none" }}>
      <Box
        onMouseEnter={() => setHoverVisibility(true)}
        onMouseLeave={() => setHoverVisibility(false)}
        sx={{
          width: "98%",
          border: "1px solid white",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bgcolor: "rgba(255,255,255,0.3)",
            opacity: hoverVisibility ? 1 : 0,
            transition: "opacity 0.2s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              ...textStyle(500, 16, "uppercase"),
              bgcolor: "#25102e",
              padding: "8px",
            }}
          >
            View more
          </Box>
        </Box>
        <img src={item.imageUrl} alt="icon" style={{ width: "100%" }} />
        <Box
          sx={{
            padding: "0.7rem",
          }}
        >
          <Typography
            sx={{
              ...textStyle(550, "20px", "uppercase"),
              lineHeight: "2rem",
            }}
            component="label"
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              ...textStyle(400, "18px", "uppercase"),
              fontFamily: "Times New Roman",
              alignSelf: "start",
              lineHeight: "1.5rem",
            }}
          >
            ${item.price}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ShopItem;
