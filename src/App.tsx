import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PAGES } from "./constants/pages-constants";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import ReviewsPage from "./pages/ReviewsPage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ShopItemPage from "./pages/ShopItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={PAGES.LOCATION} element={<LocationPage />} />
      <Route path={PAGES.REVIEWS} element={<ReviewsPage />} />
      <Route path={PAGES.SERVICES} element={<ServicesPage />} />
      <Route path={PAGES.SHOP} element={<ShopPage />} />
      <Route path={PAGES.CART} element={<CartPage />} />
      <Route path={PAGES.SHOPITEM} element={<ShopItemPage />} />
      <Route path={`${PAGES.SHOPITEM}/:id`} element={<ShopItemPage />} />
      {/* <Route path={PAGES.CHECKOUT} element={<checkoutp   />} /> TODO!!! */}
      <Route path="*" element={<Navigate to={PAGES.HOME} replace />} />
    </Routes>
  );
}

export default App;
