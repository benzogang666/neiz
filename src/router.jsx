import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Check from "./pages/check/Check";
import Search from "./pages/search/Search";
import Vacancies from "./pages/vacancies/Vacancies";

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
        path: "check",
        element: <Check />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
    ],
  },
]);

export default router;