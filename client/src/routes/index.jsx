import { createBrowserRouter } from "react-router-dom";
import Layout from "../main/layout/Layout";
import Home from "../main/pages/Home";
import Dashboard from "../dashboard/dbPages/Dashboard";
import DbLayout from "../dashboard/dbLayout/DbLayout";
import DbProducts from "../dashboard/dbPages/DbProducts";
import Products from "../main/components/Products";
import ProductDetails from "../main/pages/ProductDetails";
import Cart from "../main/pages/Cart";
import { LogIn } from "lucide-react";
import Login from "../main/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DbLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/products",
        element: <DbProducts />,
      },
    ],
  },
]);
