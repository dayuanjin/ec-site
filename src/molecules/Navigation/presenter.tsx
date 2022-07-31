import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "../../atoms/IconButton";
import { styles } from "./styles";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { Login } from "../../atoms/Login";
import {
  AnchorEl,
  HandleMouseOver,
  HandleMouseOut,
} from "../../libs/hooks/useOpenPopper";
import { FavoritePopper } from "../FavoritePopper";
import { ItemPopper } from "../ItemPopper";
import { CartPopper } from "../CartPopper";

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
      <Login />
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
