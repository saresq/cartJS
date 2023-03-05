import React, { useEffect } from "react";

import { useProducts } from "@contexts/products-context";
import Topbar from "@components/Topbar";
import Categories from "@components/Categories";
import Footer from "@components/Footer";
import Recommendations from "@components/Recommendations";
import Cart from "@components/Cart";

export default function App() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Topbar />
      <Categories />
      <Cart />
      <Recommendations products={products} />
      <Footer />
    </>
  );
}
