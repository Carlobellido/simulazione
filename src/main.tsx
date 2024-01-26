import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root"
import ErrorPage from './error-page';
import { ChakraBaseProvider } from '@chakra-ui/react';
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
    <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
