import { FC, ReactNode } from "react";
import {
  HandleMouseOut,
  HandleMouseOver,
} from "../../../libs/hooks/useOpenPopper";
import { Presenter } from "./presenter";

export type Props = {
  children: ReactNode;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
  popperKey: string;
};

export const IconButton: FC<Props> = ({
  children,
  handleMouseOver,
  handleMouseOut,
  popperKey,
}) => {
  return (
    <Presenter
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      popperKey={popperKey}
    >
      {children}
    </Presenter>
  );
};
