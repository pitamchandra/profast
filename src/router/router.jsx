import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/authentication/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {index: true, Component: Home}
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
        {path: 'login', Component: Login},
        {path: 'register', Component: Register}
    ]
  },
]);