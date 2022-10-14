import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import type {
  HandleMouseOut,
  HandleMouseOver,
} from "../../../libs/hooks/useOpenPopper";
import { styles } from "./styles";

export type Props = {
  children: ReactNode;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
  popperKey: string;
};

export const Presenter: FC<Props> = ({
  children,
  handleMouseOver,
  handleMouseOut,
  popperKey,
}) => {
  return (
    <IconButton
      onMouseOver={(e) => handleMouseOver(e, popperKey)}
      onMouseOut={handleMouseOut}
      sx={styles.root}
    >
      {children}
    </IconButton>
  );
};
