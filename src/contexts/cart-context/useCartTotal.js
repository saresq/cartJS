import { useCartContext } from "./CartContextProvider";

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products) => {
    const productQuantity = products.length;

    const totalPrice = products.reduce((sum, product) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);

    const total = {
      productQuantity,
      totalPrice,
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
