import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Search from "./pages/search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;