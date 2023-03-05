import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

/* Styles */
import GlobalStyle from "@commons/style/global-style";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "@commons/style/theme";

/* Context Providers */
import { ProductsProvider } from "@contexts/products-context";
import { CartProvider } from "@contexts/cart-context";

/* Components */
import App from "@components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);
