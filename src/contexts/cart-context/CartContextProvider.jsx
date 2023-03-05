import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);
const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const totalInitialValues = {
  "productQuantity": 3,
  "totalPrice": 4425
}

const InitialCartProducts = [
  {
      "id": 5,
      "title": "My Christmas pack",
      "description": "PACK",
      "price": 71.2,
      "minimum": 50,
      "discountPrice": 50,
      "items": [
          {
              "id": 4,
              "title": "Cardboard box",
              "description": "(Container)",
              "price": 7.2,
              "minimum": 10,
              "discountPrice": 5
          },
          {
              "id": 1,
              "title": "Unisex Short Sleeve T-Shirt",
              "description": "(Green, Small)",
              "price": 24,
              "minimum": 24,
              "discountPrice": 10
          },
          {
              "id": 2,
              "title": "Basic Bottle",
              "description": "(Blue)",
              "price": 40,
              "minimum": 10,
              "discountPrice": 36.5
          }
      ],
      "quantity": 50
  },
  {
      "id": 0,
      "title": "Basic T-Shirt",
      "description": "(White, Large)",
      "price": 13.5,
      "minimum": 10,
      "discountPrice": 10,
      "quantity": 10
  },
  {
      "id": 3,
      "title": "Woman bottle",
      "description": "(Yellow)",
      "price": 36.5,
      "minimum": 10,
      "discountPrice": 32,
      "quantity": 20
  }
]


const CartProvider = (props) => {
  const [products, setProducts] = useState(InitialCartProducts);
  const [total, setTotal] = useState(totalInitialValues);

  const CartContextValue = {
    products,
    setProducts,
    total,
    setTotal,
  };

  return <CartContext.Provider value={CartContextValue} {...props} />;
};

export { CartProvider, useCartContext };
