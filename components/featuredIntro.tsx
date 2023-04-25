import React from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const StyledSection = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-between",
    marginTop: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    marginTop: "10px",
  },
  marginBottom: "16px",
  [theme.breakpoints.up("md")]: {
    marginBottom: "12px",
  },
}));

const FeaturedIntro: React.FC = () => {
  return (
    <StyledSection>
      <Typography
        variant='h1'
        component='h1'
        sx={{ fontSize: "3.75rem", fontWeight: 700, marginRight: { md: 8 } }}
      >
        A la une
      </Typography>
    </StyledSection>
  );
};

export default FeaturedIntro;
