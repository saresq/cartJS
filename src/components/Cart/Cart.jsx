import React from "react";

import { useCart } from "@contexts/cart-context";
import CartList from "./CartList";

import * as S from "./style";

const Cart = () => {
  const { products, total } = useCart();
  return (
    <S.CartContainer>
      <S.ProductsContainer>
        <S.Title>
          Your Cart <small>({total.productQuantity})</small>
        </S.Title>
        <CartList products={products} />
      </S.ProductsContainer>
      <S.Summary>
        <S.Title>Order Summary</S.Title>
        <S.SummaryTextLine>
          <S.Quantity>Number of Items</S.Quantity>
          <S.Quantity>{total.productQuantity}</S.Quantity>
        </S.SummaryTextLine>
        <S.Line />
        <S.SummaryTextLine>
          <S.Total>Total</S.Total>
          <S.Price>
            $
            {total.totalPrice.toLocaleString("en", {
              minimumFractionDigits: 2,
            })}
          </S.Price>
        </S.SummaryTextLine>
        <S.Actions>
          <S.PrimaryButton>Proceed to Checkout</S.PrimaryButton>
          <S.SecondaryButton>Continue shopping</S.SecondaryButton>
        </S.Actions>
      </S.Summary>
    </S.CartContainer>
  );
};

export default Cart;
