import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";
import Search from "./pages/search/Search";

const router = createBrowserRouter([
  {
    path: "nope",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;