import React from "react";
import Isvg from "react-inlinesvg";

import Logo from "@assets/logo.png";
import RegionImage from "@assets/region.png";
import SocialImage from "@assets/social.png";
import TelephoneIcon from "@assets/icons/telephone.svg";

import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Columns>
        <S.CompanyInfo>
          <S.LogoContainer src={Logo} />
          <S.Description>
            We sell custom products for all your needs. Packs and bulk products
            that you will enjoy.
          </S.Description>
          <S.Contact>
            <Isvg src={TelephoneIcon} width="16px" height="16px" />
            <S.Telephone>+1-202-555-0129</S.Telephone>
          </S.Contact>
          <S.Social src={SocialImage} />
        </S.CompanyInfo>
        <S.Links>
          <S.LinkTitle>Our company</S.LinkTitle>
          <S.LinkItem>About us</S.LinkItem>
          <S.LinkItem>FAQ</S.LinkItem>
          <S.LinkItem>Partnerships</S.LinkItem>
          <S.LinkItem>Sustainability</S.LinkItem>
          <S.LinkItem>Blog</S.LinkItem>
        </S.Links>
        <S.Links>
          <S.LinkTitle>How can we help</S.LinkTitle>
          <S.LinkItem>Place a ticket</S.LinkItem>
          <S.LinkItem>Track your order</S.LinkItem>
          <S.LinkItem>Help center</S.LinkItem>
        </S.Links>
        <S.Links>
          <S.LinkTitle>Information</S.LinkTitle>
          <S.LinkItem>Contact us</S.LinkItem>
          <S.LinkItem>Live chat</S.LinkItem>
          <S.LinkItem>Privacy</S.LinkItem>
          <S.LinkItem>Terms of use</S.LinkItem>
        </S.Links>
      </S.Columns>
      <S.Line>
        <S.CopyRight>
          © 2022 Customer Products. All rights reserved.
        </S.CopyRight>
        <S.RegionContainer>
          <S.Region src={RegionImage} />
        </S.RegionContainer>
      </S.Line>
    </S.FooterContainer>
  );
};

export default Footer;
