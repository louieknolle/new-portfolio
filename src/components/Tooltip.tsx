import { Tooltip } from "@mui/material";
import React from "react";

interface HoverLinkProps {
  children: ReactElement<any, any>;
}

export const HoverLink = ({ children }: HoverLinkProps) => {
  return (
    <Tooltip title="Add" arrow>
      {children}
    </Tooltip>
  );
};
