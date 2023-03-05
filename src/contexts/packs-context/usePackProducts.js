import { usePackContext } from "./PackContextProvider";
import usePackTotal from "./usePackTotal";

const usePackProducts = () => {
  const { products, setProducts } = usePackContext();
  const { updatePackTotal } = usePackTotal();

  const updateQuantitySafely = (currentProduct, targetProduct, quantity) => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      });
    } else {
      return currentProduct;
    }
  };

  const addProduct = (newProduct) => {
    let updatedProducts;
    const isProductAlreadyInPack = products.some(
      (product) => newProduct.id === product.id
    );

    if (isProductAlreadyInPack) {
      updatedProducts = products.map((product) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity);
      });
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    updatePackTotal(updatedProducts);
  };

  const removeProduct = (productToRemove) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToRemove.id
    );

    setProducts(updatedProducts);
    updatePackTotal(updatedProducts);
  };

  const setNewProductQuantity = (productToIncrease) => {
    const updatedProducts = products.map((product) => {
      return updateQuantitySafely(product, productToIncrease, +1);
    });

    setProducts(updatedProducts);
    updatePackTotal(updatedProducts);
  };

  return {
    products,
    addProduct,
    removeProduct,
    setNewProductQuantity,
  };
};

export default usePackProducts;
