import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Error from "../components/Error";
import SingleService from "../pages/SingleService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/services/:serviceId",
        element: <SingleService></SingleService>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/login",
        element: "Login",
      },

      {
        path: "/register",
        element: "Register",
      },
    ],
  },
]);

export default router;
