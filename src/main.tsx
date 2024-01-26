import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/root';
import { ChakraBaseProvider } from '@chakra-ui/react';






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
<React.StrictMode>
    <ChakraBaseProvider>
    <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
