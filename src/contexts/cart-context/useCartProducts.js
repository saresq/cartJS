import { useCartContext } from "./CartContextProvider";
import useCartTotal from "./useCartTotal";

const useCartProducts = () => {
  const { products, setProducts } = useCartContext();
  const { updateCartTotal } = useCartTotal();

  const updateQuantitySafely = (currentProduct, targetProduct, quantity) => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: quantity,
      });
    } else {
      return currentProduct;
    }
  };

  const addProduct = (newProduct) => {
    let updatedProducts;
    const isProductAlreadyInCart = products.some(
      (product) => newProduct.id === product.id
    );

    if (isProductAlreadyInCart) {
      updatedProducts = products.map((product) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity);
      });
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const removeProduct = (productToRemove) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToRemove.id
    );

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const setNewProductQuantity = (productToIncrease, quantity) => {
    const updatedProducts = products.map((product) => {
      return updateQuantitySafely(product, productToIncrease, quantity);
    });

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  return {
    products,
    addProduct,
    removeProduct,
    setNewProductQuantity,
  };
};

export default useCartProducts;
