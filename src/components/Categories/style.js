import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CategoriesContainer = styled("div")(() => ({
  height: "64px",
  backgroundColor: "#E6E8E9",
  color: "#535C67",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "0 92px",
}));

export const Category = styled(Typography)(() => ({
  fontSize: "15px",
  lineHeight: "16px",
  fontWeight: "400",
  marginRight: "24px",
  cursor: "pointer",
}));
