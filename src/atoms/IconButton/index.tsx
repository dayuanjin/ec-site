import { ReactNode } from "react";
import {
  HandleMouseOut,
  HandleMouseOver,
} from "../../libs/hooks/useOpenPopper";
import { Presenter } from "./presenter";

export type Props = {
  children: ReactNode;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
};

export const IconButton = (props: Props) => {
  return (
    <Presenter
      handleMouseOver={props.handleMouseOver}
      handleMouseOut={props.handleMouseOut}
    >
      {props.children}
    </Presenter>
  );
};
