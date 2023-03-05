import React from "react";

import Product from "./Product";
import * as S from "./style";

const Recommendations = ({ products }) => {
  return (
    <S.RecommendationsContainer>
      <S.Title>You might also like</S.Title>
      <S.ProductsGrid>
        {products?.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </S.ProductsGrid>
    </S.RecommendationsContainer>
  );
};

export default Recommendations;
