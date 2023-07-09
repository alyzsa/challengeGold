import LandingPage from "../../module/landingPage";
import GirlSection from "../../module/landingPage/sections/GirlSection";
import CartPage from "../../module/cart";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../../module/search";

const routerList = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "cart", element: <CartPage /> },
  { path: "search", element: <SearchPage /> },
  { path: "GirlSection", element: <GirlSection /> },
]);

export default routerList;
