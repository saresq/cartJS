import React from "react";
import { useCart } from "@contexts/cart-context";
import getImage from "@utils/getImage";
import * as S from "./style";
const Product = ({ product }) => {
  const { addProduct } = useCart();
  const { id, title, price, minimum, discountPrice } = product;
  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
  };

  return (
    <S.ProductContainer tabIndex={1}>
      <S.Image src={getImage(id)} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Value>
        <S.Price>
          ${discountPrice} - ${price}
        </S.Price>
        <S.Minimum>Minimum: {minimum}</S.Minimum>
        <S.Button onClick={handleAddProduct}>Add to cart</S.Button>
      </S.Value>
    </S.ProductContainer>
  );
};

export default Product;
