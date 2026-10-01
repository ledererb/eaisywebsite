import { createBrowserRouter, redirect } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import EaisyBill from "./pages/EaisyBill";
import EaisyDesk from "./pages/EaisyDesk";
import EaisyBoost from "./pages/EaisyBoost";
import EaisyBooks from "./pages/EaisyBooks";
import EaisyBillAszf from "./pages/EaisyBillAszf";
import EaisyBillAdatkezeles from "./pages/EaisyBillAdatkezeles";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import EaisyDeskPrivacy from "./pages/EaisyDeskPrivacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "eaisy-bill", Component: EaisyBill },
      { path: "eaisy-bill/aszf", loader: () => redirect("/aszf") },
      { path: "eaisy-bill/adatkezelesi-tajekoztato", loader: () => redirect("/adatkezelesi-tajekoztato") },
      { path: "aszf", Component: EaisyBillAszf },
      { path: "adatkezelesi-tajekoztato", Component: EaisyBillAdatkezeles },
      { path: "eaisy-desk", Component: EaisyDesk },
      { path: "eaisy-boost", Component: EaisyBoost },
      { path: "eaisy-books", Component: EaisyBooks },
      { path: "privacy", Component: Privacy },
      { path: "eaisydesk/privacy", Component: EaisyDeskPrivacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
