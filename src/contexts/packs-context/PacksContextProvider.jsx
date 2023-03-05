import React, { createContext, useContext, useState } from "react";

const PackContext = createContext(undefined);
const usePackContext = () => {
  const context = useContext(PackContext);

  if (!context) {
    throw new Error("usePackContext must be used within a PackProvider");
  }

  return context;
};

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
};

const PackProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(totalInitialValues);

  const PackContextValue = {
    products,
    setProducts,
    total,
    setTotal,
  };

  return <PackContext.Provider value={PackContextValue} {...props} />;
};

export { PackProvider, usePackContext };
