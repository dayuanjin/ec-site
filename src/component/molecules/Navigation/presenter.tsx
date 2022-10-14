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
import { FC } from "react";

export type Props = {
  anchorEl: AnchorEl;
  isOpen: boolean;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
  handleClickLoginButton: HandleClickLoginButton;
  popperKey: string;
};

export const Presenter: FC<Props> = ({
  anchorEl,
  isOpen,
  handleMouseOver,
  handleMouseOut,
  handleClickLoginButton,
  popperKey,
}) => {
  return (
    <div style={styles.root}>
      <IconButton
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        popperKey="item"
      >
        <CheckroomIcon />
      </IconButton>
      <IconButton
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        popperKey="favorite"
      >
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        popperKey="cart"
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
        onClick={handleClickLoginButton}
        aria-label="ログイン"
      >
        <span>ログイン</span>
      </Button>
      {popperKey === "item" && (
        <ItemPopper open={isOpen} anchorEl={anchorEl}></ItemPopper>
      )}
      {popperKey === "favorite" && (
        <FavoritePopper open={isOpen} anchorEl={anchorEl}></FavoritePopper>
      )}
      {popperKey === "cart" && (
        <CartPopper open={isOpen} anchorEl={anchorEl}></CartPopper>
      )}
    </div>
  );
};
