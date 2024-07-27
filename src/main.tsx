import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Search from "./Search.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={""}>
          <Route index element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="contact" element={""} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
