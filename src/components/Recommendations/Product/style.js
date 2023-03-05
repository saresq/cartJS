import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const ProductContainer = styled("div")(() => ({
  position: "relative",
  maxWidth: "336px",
  marginBottom: "20px",
  cursor: "default",
  display: "flex",
  flexDirection: "column",
  height: "400px",
}));

export const Image = styled("img")(() => ({
  width: "336px",
  height: "336px",
}));

export const Title = styled(Typography)(() => ({
  margin: "0",
  paddingTop: "16px",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "16px",
}));

export const Button = styled("a")(() => ({
  marginLeft: "24px",
  height: "20px",
  borderBottom: "1px solid #091625",
  cursor: "pointer",
  color: "#091625",
  fontSize: "10px",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
}));

export const Price = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "16px",
  width: "50%",
}));

export const Minimum = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16px",
}));

export const Value = styled("div")(() => ({
  paddingTop: "10px",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));
