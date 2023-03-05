import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export const TopbarContainer = styled("div")(() => ({
  backgroundColor: "#091625",
  color: "#fff",
  height: "88px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "0 92px",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "696px",
  height: "40px",
  borderRadius: "20px",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: alpha("#fff", 0.95),
  },
  color: "#000000",
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(2),
  display: "flex",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: "1 1 auto",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export const TopbarLogo = styled("img")(() => ({
  width: "172px",
}));

export const ButtonSection = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  flex: "0 0 auto",
}));

export const Button = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  width: "84px",
  marginLeft: "26px",
  padding: "0 4px",
  cursor: "pointer",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: alpha("#fff", 0.1),
  },
}));

export const ButtonText = styled(Typography)(() => ({
  fontSize: "15px",
  lineHeight: "16px",
  fontWeight: "400",
  paddingLeft: "12px",
}));

export const Icon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
}));

export const Quantity = styled(Typography)(() => ({
  position: "absolute",
  fontSize: "10px",
  lineHeight: "16px",
  fontWeight: "400",
  paddingTop: "4px",
}));
