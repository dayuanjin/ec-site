import { AnchorEl } from "../../../libs/hooks/useOpenPopper";
import { Presenter } from "./presenter";

export type Props = {
  open: boolean;
  anchorEl: AnchorEl;
};

export const ItemPopper = (props: Props) => {
  return <Presenter open={props.open} anchorEl={props.anchorEl} />;
};
