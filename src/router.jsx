import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Reviews from "./pages/reviews/Reviews";
import Cart from "./pages/cart/Cart";
import Check from "./pages/check/Check";
import Contacts from "./pages/contacts/Contacts";
import Menu from "./pages/menu/Menu";
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
        path: "reviews",
        element: <Reviews />,
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
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "menu",
        element: <Menu />,
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