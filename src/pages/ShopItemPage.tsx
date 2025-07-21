import {
  Box,
  Button,
  createTheme,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArrowLeftSvg from "../assets/arrow-left.svg";
import { textStyle } from "../utils/styling";
import { shopItemsList, type ShopItemProps } from "../lists/shopItemsList";
import { useEffect, useRef, useState } from "react";
import { addToCart, getCartFromLocalStorage } from "../utils/cart";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
        input: {
          color: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "16px",
          borderRadius: 0,
          "& .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&:hover .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&.Mui-disabled": {
            background: "rgba(255,255,255, 0.5)",
            color: "rgba(0,0,0,0.5)",
          },
        },
      },
    },
  },
});

const ShopItemPage = () => {
  const params = useParams();
  const item =
    params.id !== undefined
      ? shopItemsList.find((shopItem) => shopItem.id === +params.id!)
      : null;

  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    if (!item) return;
    if (!quantity) setQuantity(1);
    if (quantity < 1) setQuantity(1);
    if (quantity > item.quantityRange) setQuantity(item.quantityRange);
  }, [quantity]);

  const cart = getCartFromLocalStorage();

  const btnRef = useRef<HTMLButtonElement>(null);
  const handleClick = (item: ShopItemProps) => {
    addToCart({ id: item.id, quantity });
    const btn = btnRef.current;
    if (!btn) return;
    btn.textContent = "Added!";
    btn.disabled = true;
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          padding: "3.5rem 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Link
            href="/shop"
            sx={{
              ...textStyle(300, "18px", "none"),
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <img
              src={ArrowLeftSvg}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
            back to Shop
          </Link>
          {item ? (
            <Box
              sx={{
                marginTop: "3rem",
                width: "100%",
                display: { xs: "flex", lg: "grid" },
                gridTemplateColumns: { xs: "none", lg: "repeat(2,1fr)" },
                flexDirection: { xs: "column", lg: null },
              }}
            >
              <Box>
                <img
                  src={"https://picsum.photos/800"}
                  alt="icon"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "4rem 0",
                  gap: "2rem",
                }}
              >
                <Typography
                  sx={{
                    ...textStyle(700, 40, "uppercase"),
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    ...textStyle(400, "16px", "none"),
                    width: "75%",
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography
                  sx={{
                    ...textStyle(600, "16px", "none"),
                    width: "80%",
                    textAlign: "center",
                  }}
                >
                  Price: ${item.price * quantity}
                  <br />
                  {item.quantityRange > 1 &&
                    quantity > 1 &&
                    `($${item.price} per item)`}
                </Typography>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      width: "250px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    {item.quantityRange !== 1 && (
                      <TextField
                        id="outlined-basic"
                        label="Quantity:"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Number.parseInt(e.target.value))
                        }
                        variant="outlined"
                        color="primary"
                        type="number"
                        sx={{ width: "100px" }}
                        slotProps={{
                          input: {
                            inputProps: { min: 1, max: item.quantityRange },
                          },
                        }}
                      />
                    )}
                    {cart.findIndex((cartItem) => cartItem.id === item.id) ===
                    -1 ? (
                      <Button
                        ref={btnRef}
                        disableRipple
                        disableElevation
                        variant="contained"
                        sx={{
                          width: "100%",
                        }}
                        onClick={() => handleClick(item)}
                      >
                        Add to cart
                      </Button>
                    ) : (
                      <Button
                        disabled
                        variant="contained"
                        sx={{
                          width: "100%",
                        }}
                      >
                        Already in the cart
                      </Button>
                    )}
                  </Box>
                </ThemeProvider>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Typography
                sx={{
                  ...textStyle(500, "20px"),
                  width: "60%",
                  textAlign: "center",
                }}
              >
                Oops! Something must have went wrong. Please return to shop and
                select the desired item again
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ShopItemPage;
