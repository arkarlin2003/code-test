import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AddToCartDetail from "@/pages/AddToCartDetail";
import Category from "@/pages/Category";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import PurchaseComplete from "@/pages/PurchaseComplete";
import Shipping from "@/pages/Shipping";
import TrackingOrder from "@/pages/TrackingOrder";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RouteGuard from "./RouteGuard";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/categories" element={<Category />} />
        <Route
          path="/add-to-carts"
          element={
            <RouteGuard>
              <AddToCartDetail />
            </RouteGuard>
          }
        />
        <Route
          path="/shipping"
          element={
            <RouteGuard>
              <Shipping />
            </RouteGuard>
          }
        />
        <Route path="/purchase-complete" element={<PurchaseComplete />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tracking-order" element={<TrackingOrder />} />
      </Route>
    </Route>
  )
);
export default Router;
