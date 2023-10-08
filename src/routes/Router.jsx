import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Error from "../components/Error";
import SingleService from "../pages/SingleService";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/services/:serviceId",
        element: <SingleService></SingleService>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
