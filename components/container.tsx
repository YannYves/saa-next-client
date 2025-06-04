import { Container as MuiContainer } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <MuiContainer maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      {children}
    </MuiContainer>
  );
}
