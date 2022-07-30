import { InputProps, Input as MuiInput } from "@mui/material";
import { CSSProperties } from "react";

export type Props = { style: CSSProperties } & InputProps;

export const Input = (props: Props) => {
  return <MuiInput sx={props.style} {...props} />;
};
