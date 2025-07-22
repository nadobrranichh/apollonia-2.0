import React, { useEffect, useRef, useState } from "react";
import { type CartItem } from "../utils/cart";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { shopItemsList } from "../lists/shopItemsList";
import { textStyle } from "../utils/styling";
import PlusSvg from "../assets/plus-svgrepo-com.svg";
import MinusSvg from "../assets/minus-svgrepo-com.svg";
import CrossSvg from "../assets/cross-svgrepo-com.svg";

const CartItemBox: React.FC<{
  item: CartItem;
  handleRemoveCartItem: (cartItem: CartItem) => void;
  onQuantityChange: (id: number, newQuantity: number) => void;
}> = ({ item, handleRemoveCartItem, onQuantityChange }) => {
  const itemData = shopItemsList.find((shopItem) => shopItem.id === item.id);
  const [itemQuantity, setItemQuantity] = useState<number>(item.quantity);
  const btnMinusRef = useRef<HTMLButtonElement>(null);
  const btnPlusRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!itemData) return;
    const btnMinus = btnMinusRef.current;
    const btnPlus = btnPlusRef.current;
    if (!btnMinus || !btnPlus) return;

    if (itemQuantity === 1) btnMinus.disabled = true;
    else btnMinus.disabled = false;

    if (itemQuantity === itemData.quantityRange) btnPlus.disabled = true;
    else btnPlus.disabled = false;

    onQuantityChange(item.id, itemQuantity);
  }, [itemQuantity]);

  const QuantityControls = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80px",
        ml: { md: "15%", lg: "29%", xl: "38%" },
      }}
    >
      <IconButton
        ref={btnMinusRef}
        sx={{ padding: "0" }}
        onClick={() => setItemQuantity(itemQuantity - 1)}
      >
        <img src={MinusSvg} alt="icon" style={{ width: "22px" }} />
      </IconButton>
      <Typography sx={textStyle(400, "20px")}>{itemQuantity}</Typography>
      <IconButton
        ref={btnPlusRef}
        sx={{ padding: "0" }}
        onClick={() => setItemQuantity(itemQuantity + 1)}
      >
        <img src={PlusSvg} alt="icon" style={{ width: "22px" }} />
      </IconButton>
    </Box>
  );

  const PriceAndRemove = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ml: { md: "auto" },
        mr: { md: "2rem" },
      }}
    >
      <Typography sx={textStyle(400, "20px")}>
        ${itemData && itemQuantity * itemData?.price}
      </Typography>
      <IconButton
        sx={{ padding: 0 }}
        onClick={() => handleRemoveCartItem(item)}
      >
        <img
          src={CrossSvg}
          alt="icon"
          style={{ width: "25px", marginLeft: "10px" }}
        />
      </IconButton>
    </Box>
  );

  const InfoBlock = (
    <Box
      sx={{ p: isMobile ? "0.7rem" : "1rem", width: isMobile ? "auto" : "30%" }}
    >
      <Typography sx={textStyle(600, "1.2rem", "uppercase")}>
        {itemData && itemData.title}
      </Typography>
      <Typography sx={{ ...textStyle(450, "1rem", "none"), mt: "0.5rem" }}>
        Price per item: ${itemData && itemData.price}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ border: "1px solid white" }}>
      {isMobile ? (
        <>
          <Box sx={{ display: "flex" }}>
            <img
              src={itemData?.imageUrl}
              alt="icon"
              style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
            />
            {InfoBlock}
          </Box>
          <Box
            sx={{
              borderTop: "1px solid white",
              padding: "1rem 15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {QuantityControls}
            {PriceAndRemove}
          </Box>
        </>
      ) : (
        <Box sx={{ display: "flex" }}>
          <img
            src={itemData?.imageUrl}
            alt="icon"
            style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
          />
          {InfoBlock}
          {QuantityControls}
          {PriceAndRemove}
        </Box>
      )}
    </Box>
  );
};

export default CartItemBox;
