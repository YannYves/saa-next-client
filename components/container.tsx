import { ReactNode } from "react";
import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  margin: "0 auto",
  padding: "0 16px",
  maxWidth: "100%",
});

type ContainerProps = {
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;
  return <StyledDiv>{children} </StyledDiv>;
};

export default Container;
