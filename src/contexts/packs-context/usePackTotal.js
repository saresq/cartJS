import { usedddPackContext } from "./dddPackContextProvider";

const usedddPackTotal = () => {
  const { total, setTotal } = usedddPackContext();

  const updatedddPackTotal = (products) => {
    const productQuantity = products.reduce((sum, product) => {
      sum += product.quantity;
      return sum;
    }, 0);

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
    updatedddPackTotal,
  };
};

export default usedddPackTotal;
