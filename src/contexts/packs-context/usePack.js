import usePackProducts from "./usePackProducts";
import usePackTotal from "./usePackTotal";

const usePack = () => {
  const { products, addProduct, removeProduct, setNewProductQuantity } =
    usePackProducts();
  const { total, updatePackTotal } = usePackTotal();

  return {
    products,
    addProduct,
    removeProduct,
    setNewProductQuantity,
    total,
    updatePackTotal,
  };
};

export default usePack;
