import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../error-page";
import ListMovies from "../componenti/ListMovies";



export const router = createBrowserRouter([
  {
    path:"/",
    element: <ListMovies/>,
    errorElement: <ErrorPage/>
  },

]);

  

  