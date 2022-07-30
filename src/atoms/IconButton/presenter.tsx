import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import { styles } from "./styles";

export type Props = {
  children: ReactNode;
};

export const Presenter = (props: Props) => {
  return <IconButton sx={styles.root}>{props.children}</IconButton>;
};
