import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { textStyle } from "../utils/styling";
import ShopItem from "../components/ShopItem";
import { shopItemsList } from "../lists/shopItemsList";

const ShopPage = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(75deg, #000, #624190)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "5rem",
        }}
      >
        <Typography
          sx={{
            ...textStyle(500, "3rem", "uppercase"),
            fontFamily: "Times New Roman",
            marginBottom: "2.5rem",
          }}
        >
          Shop
        </Typography>
        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: { md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
            flexDirection: { xs: "column", md: "none" },
            width: { xs: "80%", lg: "70%", xl: "90%" },
            gap: { xs: "2rem", md: "4rem" },
          }}
        >
          {shopItemsList.map((item, i) => (
            <Box key={i} sx={{ display: "flex", justifyContent: "center" }}>
              <ShopItem item={item} />
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ShopPage;
