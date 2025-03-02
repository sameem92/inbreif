"use client";

import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

const ItemWrapper = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>;
};

export default ItemWrapper;
