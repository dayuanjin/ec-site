import { ReactNode } from "react";
import { Presenter } from "./presenter";

export type Props = {
  children: ReactNode;
};

export const IconButton = (props: Props) => {
  return <Presenter>{props.children}</Presenter>;
};
