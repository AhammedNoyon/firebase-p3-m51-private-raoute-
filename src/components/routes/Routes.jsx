import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../privateRoutes/Profile";
import PrivateParent from "../privateRoutes/PrivateParent";
import Orders from "../privateRoutes/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "profile",
        element: (
          <PrivateParent>
            <Profile></Profile>
          </PrivateParent>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateParent>
            <Orders></Orders>
          </PrivateParent>
        ),
      },
    ],
  },
]);
export default router;
