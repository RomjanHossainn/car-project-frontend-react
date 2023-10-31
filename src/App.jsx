import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./components/Service/ServiceDetails";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutPrivet from "./pages/Checkout/CheckoutPrivet";
import YourOrders from "./pages/YourOrders/YourOrders";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path : '/yourorders',
        element : <YourOrders></YourOrders>
      },
      {
        path: "/checkout/:id",
        element: (
          <CheckoutPrivet>
            <Checkout></Checkout>
          </CheckoutPrivet>
        ),
      },
    ],
  },
]);

export default router;