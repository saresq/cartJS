import useCartProducts from "./useCartProducts";
import useCartTotal from "./useCartTotal";

const useCart = () => {
  const { products, addProduct, removeProduct, setNewProductQuantity } =
    useCartProducts();
  const { total, updateCartTotal } = useCartTotal();

  return {
    products,
    addProduct,
    removeProduct,
    setNewProductQuantity,
    total,
    updateCartTotal,
  };
};

export default useCart;
