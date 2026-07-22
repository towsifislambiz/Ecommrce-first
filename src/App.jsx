import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Login from "./pages/Login.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Error from "./pages/Error.jsx";

// Account Pages
import Dashboard from "./pages/Account2/Dashboard.jsx";
import MyOrders from "./pages/Account2/MyOrders.jsx";
import Wishlist from "./pages/Account2/Wishlist.jsx";
import AddressBook from "./pages/Account2/AddressBook.jsx";
import PaymentMethods from "./pages/Account2/PaymentMethods.jsx";
import AccountSettings from "./pages/Account2/AccountSettings.jsx";
import Notifications from "./pages/Account2/Notifications.jsx";
import Coupons from "./pages/Account2/Coupons.jsx";
import TrackOrder from "./pages/Account2/TrackOrder.jsx";
import ReturnsRefunds from "./pages/Account2/ReturnsRefunds.jsx";
import MyReviews from "./pages/Account2/MyReviews.jsx";
import RecentlyViewed from "./pages/Account2/RecentlyViewed.jsx";
import HelpCenter from "./pages/Account2/HelpCenter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />

      {/* Account */}
      <Route path="/account" element={<Dashboard />} />
      <Route path="/account/orders" element={<MyOrders />} />
      <Route path="/account/wishlist" element={<Wishlist />} />
      <Route path="/account/address" element={<AddressBook />} />
      <Route path="/account/payment" element={<PaymentMethods />} />
      <Route path="/account/settings" element={<AccountSettings />} />
      <Route path="/account/notifications" element={<Notifications />} />
      <Route path="/account/coupons" element={<Coupons />} />
      <Route path="/account/track-order" element={<TrackOrder />} />
      <Route path="/account/returns" element={<ReturnsRefunds />} />
      <Route path="/account/reviews" element={<MyReviews />} />
      <Route
        path="/account/recently-viewed"
        element={<RecentlyViewed />}
      />
      <Route path="/account/help" element={<HelpCenter />} />

      <Route path="/wish" element={<Wish />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />

      {/* 404 Error Page */}
      <Route path="*" element={<Error />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;