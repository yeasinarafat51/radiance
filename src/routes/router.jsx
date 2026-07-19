import { createBrowserRouter } from "react-router-dom";

import RoutLayouts from "../layout/RoutLayouts";
import Home from "../page/Home";
import About from "../page/allpage/About";
import Services from "../page/allpage/Services";
import Tannery from "../page/allpage/Tannery";
import Manufacturing from "../page/allpage/Manufacturing";
import Contact from "../page/allpage/Contact";
import Team from "../page/allpage/Team";
import Product from "../page/allpage/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayouts,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "tannery",
        Component: Tannery,
      },
      {
        path: "manufacturing-unit",
        Component: Manufacturing,
      },
      {
        path: "product",
        Component: Product,
      },
      {
        path: "contact",
        Component: Contact,
      },
     
      {
        path: "team",
        Component: Team,
      },
    ],
  },
]);