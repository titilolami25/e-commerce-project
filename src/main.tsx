import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider> {/* Wrap App so Header can access cart */}
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
