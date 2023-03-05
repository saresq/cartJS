import React from "react";
import Item from "./Item";
import Pack from "./Pack";

const CartList = ({ products }) => {
  const renderProducts = () => {
    if (products?.length) {
      return products.map((p) =>
        p.items?.length ? (
          <Pack product={p} key={p.id} />
        ) : (
          <Item product={p} key={p.id} />
        )
      );
    }
    return null;
  };

  return <>{renderProducts()}</>;
};

export default CartList;
