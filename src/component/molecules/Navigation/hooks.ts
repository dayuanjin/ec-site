import {
  AnchorEl,
  HandleMouseOut,
  HandleMouseOver,
  useOpenPopper,
} from "../../../libs/hooks/useOpenPopper";
import { useRouter } from "../../../libs/hooks/useRouter";

export type HandleClickLoginButton = () => void;

export type Hooks = {
  handleClickLoginButton: HandleClickLoginButton;
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

export const useHooks = (): Hooks => {
  const router = useRouter();
  const handleClickLoginButton = () => {
    router.push("/login");
  };
  const {
    anchorEl: favoriteAnchorEl,
    isOpen: isOpenFavoritePopper,
    handleMouseOver: handleMouseOverFavorite,
    handleMouseOut: handleMouseOutFavorite,
  } = useOpenPopper();
  const {
    anchorEl: cartAnchorEl,
    isOpen: isOpenCartPopper,
    handleMouseOver: handleMouseOverCart,
    handleMouseOut: handleMouseOutCart,
  } = useOpenPopper();
  const {
    anchorEl: itemAnchorEl,
    isOpen: isOpenItemPopper,
    handleMouseOver: handleMouseOverItem,
    handleMouseOut: handleMouseOutItem,
  } = useOpenPopper();
  return {
    handleClickLoginButton,
    favoriteAnchorEl,
    isOpenFavoritePopper,
    handleMouseOverFavorite,
    handleMouseOutFavorite,
    cartAnchorEl,
    isOpenCartPopper,
    handleMouseOverCart,
    handleMouseOutCart,
    itemAnchorEl,
    isOpenItemPopper,
    handleMouseOverItem,
    handleMouseOutItem,
  };
};
