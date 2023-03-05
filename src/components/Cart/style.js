import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CartContainer = styled("div")(() => ({
  padding: "0 92px",
  marginTop: "32px",
  marginBottom: "80px",
  display: "flex",
  flexDirection: "row",
}));

export const ProductsContainer = styled("div")(() => ({
  flex: "1 1 auto",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "700",
  color: "#091625",
  "& small": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    color: "#6B737C",
  },
}));

export const Summary = styled("div")(() => ({
  width: "336px",
  flex: "0 0 auto",
  marginLeft: "24px",
}));

export const Quantity = styled(Typography)(() => ({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#6B737C",
}));

export const Line = styled("hr")(() => ({
  marginTop: "24px",
  borderTop: "1px solid #e6e8e9",
}));

export const SummaryTextLine = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
}));

export const Total = styled(Typography)(() => ({
  fontSize: "18px",
  lineHeight: "18px",
  fontWeight: "600",
  color: "#091625",
}));

export const Price = styled(Typography)(() => ({
  fontSize: "24px",
  lineHeight: "16px",
  fontWeight: "700",
  color: "#091625",
}));

export const Actions = styled("div")(() => ({
  marginTop: "32px",
}));

export const PrimaryButton = styled("a")(() => ({
  width: "100%",
  height: "48px",
  backgroundColor: "#3a4451",
  borderRadius: "8px",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  "&:hover": {
    backgroundColor: "#4b596b",
    boxShadow: "0px 4px 10px -5px #091625",
  },
}));

export const SecondaryButton = styled("a")(() => ({
  width: "100%",
  height: "48px",
  marginTop: "12px",
  border: "2px solid #091625",
  borderRadius: "8px",
  display: "inline-block",
  cursor: "pointer",
  color: "#091625",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  "&:hover": {
    border: "2px solid #4b596b",
    boxShadow: "0px 4px 10px -5px #091625",
  },
}));
