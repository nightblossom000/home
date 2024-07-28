import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from "./App.tsx";
import Search from "./Search.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Provider } from 'react-redux';
import store from './redux/store';

import "./index.css";

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/search',
    element: <Search />,
  },

  
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
