import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from "./App.tsx";
import DB from "./DB.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";
import { Provider } from "react-redux";


import "./index.css";

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
    
  
  {
    path: '/search',
    element: <DB />,
  },

  
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<Provider store={store}>
<PersistGate persistor={persistor}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
