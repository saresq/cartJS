import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext(undefined);
const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProductsContext must be within a ProductsProvider");
  }

  return context;
};

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const ProductContextValue = {
    products,
    setProducts,
    filters,
    setFilters,
  };

  return <ProductsContext.Provider value={ProductContextValue} {...props} />;
};

export { ProductsProvider, useProductsContext };
