import {
  createBrowserRouter,
} from "react-router-dom";
import Home, { loaderRoot } from "../Pages/Home";
import ErrorPage from "../error-page";
import Dettagli from "../Pages/Dettagli";


//loader per la pagina home




export const router = createBrowserRouter([


  {
    path: "/Home",
    element: <Home />,
    loader: loaderRoot,
    errorElement: <ErrorPage />
  },
  {
    path: "/Detail/:id",
    element: <Dettagli />,
    loader: loaderRoot,
    errorElement: <ErrorPage />
  },
  
/* hello */


]);



