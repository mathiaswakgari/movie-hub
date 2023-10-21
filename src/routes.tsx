import { createBrowserRouter } from "react-router-dom";
import Movie from "./components/Movie";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies/:id", element: <Movie /> },
    ],
  },
]);

export default routes;
