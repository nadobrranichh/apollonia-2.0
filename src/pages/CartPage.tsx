// import React from "react";

import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getCartFromLocalStorage,
  refreshCart,
  removeFromCart,
  type CartItem,
} from "../utils/cart";
import { textStyle } from "../utils/styling";
import { theme } from "./ShopItemPage";
import { PAGES } from "../constants/pages-constants";
import CartItemBox from "../components/CartItemBox";
import { useEffect, useState } from "react";
import { shopItemsList } from "../lists/shopItemsList";

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>(getCartFromLocalStorage());

  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    const newSubTotal = cart.reduce(
      (acc, el) =>
        (acc +=
          el.quantity * shopItemsList.find((item) => item.id === el.id)!.price),
      0
    );
    setSubTotal(newSubTotal);
  }, [cart]);

  const updateItemQuantity = function (id: number, newQuantity: number) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    refreshCart(updatedCart);
    setCart(updatedCart);
  };

  const handleRemoveCartItem = function (cartItem: CartItem) {
    removeFromCart(cartItem);
    setCart(getCartFromLocalStorage());
  };
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          padding: "1.5rem 0 4rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            ...textStyle(500, "3rem", "uppercase"),
            fontFamily: "Times New Roman",
          }}
        >
          Cart
        </Typography>
        <Box sx={{ margin: "8rem 0", width: "90%" }}>
          {cart.length > 0 ? (
            <>
              <Box
                sx={{
                  "& > :not(:last-child)": {
                    marginBottom: "2rem",
                  },
                }}
              >
                {cart.map((cartItem) => (
                  <CartItemBox
                    key={cartItem.id}
                    item={cartItem}
                    handleRemoveCartItem={handleRemoveCartItem}
                    onQuantityChange={updateItemQuantity}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  marginTop: "4rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography sx={textStyle(500, "25px")}>
                  Subtotal: ${subTotal}
                </Typography>
                <ThemeProvider theme={theme}>
                  <Button sx={{ padding: "0.7rem 2rem" }} variant="contained">
                    Checkout
                  </Button>
                </ThemeProvider>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <Typography sx={textStyle(400, "20px", "none")}>
                Looks like you don't have anything in the cart yet.
              </Typography>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  sx={{ padding: "0.7rem 1.5rem" }}
                  href={PAGES.SHOP}
                >
                  Continue Shopping
                </Button>
              </ThemeProvider>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CartPage;
