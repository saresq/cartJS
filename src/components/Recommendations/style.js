import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const RecommendationsContainer = styled("div")(() => ({
  padding: "80px 92px 120px",
}));

export const ProductsGrid = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "24px",
  lineHeight: "16px",
  fontWeight: "700",
  marginBottom: "24px",
}));
