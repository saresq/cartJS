import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Isvg from "react-inlinesvg";

export const PackContainer = styled("div")(() => ({
  borderBottom: "1px solid #CED0D3",
  display: "flex",
  padding: "24px 0",
}));

export const ImageContainer = styled("div")(() => ({
  width: "120px",
  flex: "0 0 auto",
  marginRight: "12px",
}));

export const Image = styled("img")(() => ({
  width: "120px",
  height: "120px",
}));

export const Label = styled(Typography)(() => ({
  width: "34px",
  textAlign: "center",
  fontSize: "10px",
  lineHeight: "16px",
  fontWeight: "600",
  color: "#848A92",
  paddingLeft: "2px 4px",
  backgroundColor: "#E6E8E9",
  margin: "8px auto",
}));

export const Description = styled("div")(() => ({
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "space-between",
}));

export const PackInfo = styled("div")(() => ({
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
  display: "inline-block",
  cursor: "pointer",
}));

export const Actions = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
}));

export const ActionsSeparator = styled("div")(() => ({
  width: "1px",
  height: "14px",
  backgroundColor: "#6B737C",
  margin: "0px 8px",
}));

export const Edit = styled(Typography)(() => ({
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: "600",
  color: "#000",
  display: "inline-block",
  cursor: "pointer",
}));

export const PackPrice = styled("div")(() => ({
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

export const Items = styled("div")(() => ({
  marginTop: "16px",
}));

export const Item = styled("div")(() => ({
  "&:before": {
    content: '"•"',
    fontSize: "14px",
    padding: "0 8px",
  },
}));

export const ItemTitle = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "600",
  color: "#091625",
  display: "inline-block",
}));

export const ItemDescription = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "400",
  color: "#6B737C",
  display: "inline-block",
  marginLeft: "8px",
}));
