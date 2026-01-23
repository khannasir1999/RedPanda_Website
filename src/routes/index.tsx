import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home/home";
import Services from "../pages/Services/services";
import Casestudies from "../pages/Casestudies/casestudies";
import Blog from "../pages/Blog/blog";
import RootProvider from "../providers/RootProvider";
import Contact from "../pages/Contact/contact";
import Blogdetail from "../pages/Blog/blogdetail";
import Getaquote from "../pages/GetAQuote/getaquote";
import Portfolio from "@/pages/Portfolio/portfolio";
import NotFound from "../pages/404/404";
import ThankYou from "../pages/Thankyou/thankyou";

const router = createBrowserRouter([
  {
    element: <RootProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/casestudies",
        element: <Casestudies />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog-detail/:id",
        element: <Blogdetail />,
      },
      {
        path: "/get-quote",
        element: <Getaquote />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export function CustomRouter() {
  return <RouterProvider router={router} />;
}
