import { Popper } from "@mui/material";
import { AnchorEl } from "../../libs/hooks/useOpenPopper";
import { styles } from "./styles";

export type Props = {
  open: boolean;
  anchorEl: AnchorEl;
};

export const Presenter = (props: Props) => {
  return (
    <Popper open={props.open} anchorEl={props.anchorEl}>
      <div style={styles.root}>お気に入りはありません。</div>
    </Popper>
  );
};
