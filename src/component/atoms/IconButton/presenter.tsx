import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import {
  HandleMouseOut,
  HandleMouseOver,
} from "../../libs/hooks/useOpenPopper";
import { styles } from "./styles";

export type Props = {
  children: ReactNode;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
};

export const Presenter = (props: Props) => {
  return (
    <IconButton
      onMouseOver={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
      sx={styles.root}
    >
      {props.children}
    </IconButton>
  );
};
