import React from "react";
import Isvg from "react-inlinesvg";

import SearchIcon from "@mui/icons-material/Search";
import BagIcon from "@assets/icons/bag.svg";
import AccountIcon from "@assets/icons/account.svg";
import Logo from "@assets/logo.png";
import * as S from "./style";

import { useCart } from "@contexts/cart-context";

export default function Topbar() {
  const { total } = useCart();

  return (
    <S.TopbarContainer sx={{ flexGrow: 1 }}>
      <S.TopbarLogo src={Logo} />
      <S.Search>
        <S.SearchIconWrapper>
          <SearchIcon />
        </S.SearchIconWrapper>
        <S.StyledInputBase
          placeholder="Search Products"
          inputProps={{ "aria-label": "Search Products" }}
        />
      </S.Search>
      <S.ButtonSection>
        <S.Button onClick={() => console.log("Sign In Clicked")}>
          <Isvg src={AccountIcon} width="24" height="24" />
          <S.ButtonText>Sign in</S.ButtonText>
        </S.Button>
        <S.Button onClick={() => window.location.reload()}>
          <S.Icon>
            <Isvg src={BagIcon} width="24" height="24" />
            <S.Quantity>{total.productQuantity}</S.Quantity>
          </S.Icon>
          <S.ButtonText>Cart</S.ButtonText>
        </S.Button>
      </S.ButtonSection>
    </S.TopbarContainer>
  );
}
