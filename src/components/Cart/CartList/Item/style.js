import Isvg from "react-inlinesvg";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const ItemContainer = styled("div")(() => ({
  borderBottom: "1px solid #CED0D3",
  display: "flex",
  padding: "24px 0",
}));

export const Image = styled("img")(() => ({
  width: "120px",
  height: "120px",
  marginRight: "12px",
  flex: "0 0 auto",
}));

export const Description = styled("div")(() => ({
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "space-between",
}));

export const ItemInfo = styled("div")(() => ({
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "700",
}));

export const Quantity = styled(Typography)(() => ({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "600",
  marginTop: "12px",
  display: "flex",
  alignItems: "center",
}));

export const QuantityIcon = styled(Isvg)(() => ({
  marginLeft: "4px",
}));

export const Remove = styled(Typography)(() => ({
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: "600",
  color: "#000",
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
  maxWidth: "fit-content",
  cursor: "pointer",
}));

export const RemoveIcon = styled(Isvg)(() => ({
  marginRight: "8px",
}));

export const ItemPrice = styled("div")(() => ({
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingTop: "27px",
}));

export const Price = styled(Typography)(() => ({
  fontSize: "18px",
  lineHeight: "16px",
  fontWeight: "700",
  color: "#091625",
  paddingLeft: "4px",
}));

export const Total = styled("div")(() => ({
  fontSize: "18px",
  lineHeight: "16px",
  fontWeight: "600",
  color: "#091625",
  paddingTop: "12px",
  display: "flex",
  alignItems: "center",
}));

export const QuantityField = styled("input")(() => ({
  fontSize: "20px",
  lineHeight: "16px",
  fontWeight: "600",
  border: "0",
  outline: "0",
  background: "transparent",
  borderBottom: "1px solid black",
  width: "36px",
  textAlign: "center",
}));
