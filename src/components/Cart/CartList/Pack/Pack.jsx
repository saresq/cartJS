import React, { useEffect, useState } from "react";
import ArrowIcon from "@assets/icons/arrow.svg";

import { useCart } from "@contexts/cart-context";
import getImage from "@utils/getImage";

import * as S from "./style";

const Pack = ({ product }) => {
  const { removeProduct, setNewProductQuantity } = useCart();
  const { id, title, items, price, quantity } = product;
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

  const renderItems = () => {
    return items.map((i, index) => {
      return (
        <S.Item key={index}>
          <S.ItemTitle>{i.title}: </S.ItemTitle>
          <S.ItemDescription>{i.description}</S.ItemDescription>
        </S.Item>
      );
    });
  };

  const getTotal = () => {
    const total = price * quantity;
    return total.toLocaleString("en", { minimumFractionDigits: 2 });
  };

  return (
    <S.PackContainer>
      <S.ImageContainer>
        <S.Image src={getImage(id)} alt={title} />
        <S.Label>PACK</S.Label>
      </S.ImageContainer>
      <S.Description>
        <S.PackInfo>
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
          <S.Items>{renderItems()}</S.Items>
          <S.Actions>
            <S.Edit onClick={() => console.log("editPack Clicked")}>
              Edit Pack
            </S.Edit>
            <S.ActionsSeparator />
            <S.Remove onClick={() => handleRemoveProduct()}>Remove</S.Remove>
          </S.Actions>
        </S.PackInfo>
        <S.PackPrice>
          <S.Price>
            ${price.toLocaleString("en", { minimumFractionDigits: 2 })}
          </S.Price>
          <S.Total>
            Total:
            <S.Price>${getTotal()}</S.Price>
          </S.Total>
        </S.PackPrice>
      </S.Description>
    </S.PackContainer>
  );
};

export default Pack;
