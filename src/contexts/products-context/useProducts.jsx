import { useCallback } from "react";

import { useProductsContext } from "./ProductsContextProvider";
import { getProducts } from "@services/products";

const useProducts = () => {
  const { products, setProducts, filters, setFilters } = useProductsContext();

  const fetchProducts = useCallback(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [setProducts]);

  const filterProducts = (filters) => {
    getProducts().then((products) => {
      let filteredProducts;

      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p) =>
          filters.find((filter) =>
            p.availableSizes.find((size) => size === filter)
          )
        );
      } else {
        filteredProducts = products;
      }

      setFilters(filters);
      setProducts(filteredProducts);
    });
  };

  return {
    fetchProducts,
    products,
    filterProducts,
    filters,
  };
};

export default useProducts;
