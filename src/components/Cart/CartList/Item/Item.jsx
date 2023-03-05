import React, { useEffect, useState } from "react";
import TrashIcon from "@assets/icons/trash.svg";
import ArrowIcon from "@assets/icons/arrow.svg";

import { useCart } from "@contexts/cart-context";
import getImage from "@utils/getImage";

import * as S from "./style";

const Item = ({ product }) => {
  const { removeProduct, setNewProductQuantity } = useCart();
  const { id, title, item, price, quantity } = product;
  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleRemoveProduct = () => removeProduct(product);

  useEffect(() => {
    setNewProductQuantity(product, productQuantity);
  }, [productQuantity]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    let qty = isNaN(value) ? 0 : value;
    setProductQuantity(qty);
  };

  const getTotal = () => {
    const total = price * quantity;
    return total.toLocaleString("en", { minimumFractionDigits: 2 });
  };
  return (
    <S.ItemContainer>
      <S.Image src={getImage(id)} alt={title} />
      <S.Description>
        <S.ItemInfo>
          <S.Title>{title}</S.Title>
          <S.Quantity>
            Quantity:{" "}
            <S.QuantityField
              id="quantity"
              variant="standard"
              value={productQuantity}
              onChange={handleQuantityChange}
            />
            <S.QuantityIcon src={ArrowIcon} width="8" height="8" />
          </S.Quantity>
          <S.Remove onClick={() => handleRemoveProduct()}>
            <S.RemoveIcon src={TrashIcon} width="16" height="16" />
            Remove
          </S.Remove>
        </S.ItemInfo>
        <S.ItemPrice>
          <S.Price>
            ${price.toLocaleString("en", { minimumFractionDigits: 2 })}
          </S.Price>
          <S.Total>
            Total:
            <S.Price>${getTotal()}</S.Price>
          </S.Total>
        </S.ItemPrice>
      </S.Description>
    </S.ItemContainer>
  );
};

export default Item;
