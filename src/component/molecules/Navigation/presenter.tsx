import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "../../atoms/IconButton";
import { styles } from "./styles";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import {
  AnchorEl,
  HandleMouseOver,
  HandleMouseOut,
} from "../../../libs/hooks/useOpenPopper";
import { CartPopper } from "../CartPopper";
import { FavoritePopper } from "../FavoritePopper";
import { ItemPopper } from "../ItemPopper";
import { Button } from "@mui/material";
import { HandleClickLoginButton } from "./hooks";

export type Props = {
  favoriteAnchorEl: AnchorEl;
  isOpenFavoritePopper: boolean;
  handleMouseOverFavorite: HandleMouseOver;
  handleMouseOutFavorite: HandleMouseOut;
  cartAnchorEl: AnchorEl;
  isOpenCartPopper: boolean;
  handleMouseOverCart: HandleMouseOver;
  handleMouseOutCart: HandleMouseOut;
  itemAnchorEl: AnchorEl;
  isOpenItemPopper: boolean;
  handleMouseOverItem: HandleMouseOver;
  handleMouseOutItem: HandleMouseOut;
  handleClickLoginButton: HandleClickLoginButton;
};

export const Presenter = (props: Props) => {
  return (
    <div style={styles.root}>
      <IconButton
        handleMouseOver={props.handleMouseOverItem}
        handleMouseOut={props.handleMouseOutItem}
      >
        <CheckroomIcon />
      </IconButton>
      <IconButton
        handleMouseOver={props.handleMouseOverFavorite}
        handleMouseOut={props.handleMouseOutFavorite}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton
        handleMouseOver={props.handleMouseOverCart}
        handleMouseOut={props.handleMouseOutCart}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <Button
        sx={{
          display: "flex",
          flexShrink: 1,
          color: "#333",
          "&.MuiButton-root:hover": {
            backgroundColor: "#f7f6f5",
          },
        }}
        onClick={props.handleClickLoginButton}
        aria-label="ログイン"
      >
        <span>ログイン</span>
      </Button>
      <CartPopper
        open={props.isOpenFavoritePopper}
        anchorEl={props.favoriteAnchorEl}
      ></CartPopper>
      <FavoritePopper
        open={props.isOpenCartPopper}
        anchorEl={props.cartAnchorEl}
      ></FavoritePopper>
      <ItemPopper
        open={props.isOpenItemPopper}
        anchorEl={props.itemAnchorEl}
      ></ItemPopper>
    </div>
  );
};
