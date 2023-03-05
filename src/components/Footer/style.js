import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const FooterContainer = styled("div")(() => ({
  padding: "80px 92px",
  backgroundColor: "#E6E8E9",
}));

export const Columns = styled("div")(() => ({
  display: "flex",
  marginBottom: "112px",
}));

export const CompanyInfo = styled("div")(() => ({
  width: "264px",
  display: "flex",
  flexDirection: "column",
  flex: "0 0 auto",
  marginRight: "96px",
}));

export const LogoContainer = styled("img")(() => ({
  width: "172px",
  height: "48px",
}));

export const Links = styled("div")(() => ({
  flex: "1 1 auto",
}));

export const LinkTitle = styled(Typography)(() => ({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "700",
  color: "#091625",
}));

export const LinkItem = styled(Typography)(() => ({
  fontSize: "15px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#3A4451",
  marginTop: "24px",
}));

export const Line = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CopyRight = styled(Typography)(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#535C67",
}));

export const Description = styled(Typography)(() => ({
  fontSize: "15px",
  lineHeight: "24px",
  fontWeight: "400",
  color: "#6B737C",
  margin: "24px 0",
}));

export const RegionContainer = styled("div")(() => ({}));

export const Region = styled("img")(() => ({
  width: "368px",
  height: "16px",
}));

export const Contact = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const Telephone = styled(Typography)(() => ({
  fontSize: "15px",
  lineHeight: "16px",
  fontWeight: "600",
  color: "#091625",
  paddingLeft: "8px",
}));

export const Social = styled("img")(() => ({
  marginTop: "40px",
  width: "192px",
}));
