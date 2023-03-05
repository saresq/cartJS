import React from "react";

import * as S from "./style";

const categoriesTypes = [
  "All Products",
  "Packaging",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

export default function Categories() {
  return (
    <S.CategoriesContainer sx={{ flexGrow: 1 }}>
      {categoriesTypes.map((category, index) => (
        <S.Category key={index}>{category}</S.Category>
      ))}
    </S.CategoriesContainer>
  );
}
