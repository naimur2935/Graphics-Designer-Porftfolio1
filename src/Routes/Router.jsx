import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Portfolios from "../Pages/Portfolios/Portfolios";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout> ,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/:name",
          element: <Portfolios></Portfolios>
        },
      ]
    },
  ]); 
export default router;