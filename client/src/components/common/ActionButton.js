import React from "react";
import { IconButton } from "@material-ui/core/";

const ActionButton = ({ children, action }) => {
  return <IconButton onClick={action}>{children}</IconButton>;
};

export default ActionButton;
