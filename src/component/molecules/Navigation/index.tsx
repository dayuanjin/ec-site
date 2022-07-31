import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const Navigation = () => {
  const {
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
    handleClickLoginButton,
  } = useHooks();
  return (
    <Presenter
      handleClickLoginButton={handleClickLoginButton}
      favoriteAnchorEl={favoriteAnchorEl}
      isOpenFavoritePopper={isOpenFavoritePopper}
      handleMouseOverFavorite={handleMouseOverFavorite}
      handleMouseOutFavorite={handleMouseOutFavorite}
      cartAnchorEl={cartAnchorEl}
      isOpenCartPopper={isOpenCartPopper}
      handleMouseOverCart={handleMouseOverCart}
      handleMouseOutCart={handleMouseOutCart}
      itemAnchorEl={itemAnchorEl}
      isOpenItemPopper={isOpenItemPopper}
      handleMouseOverItem={handleMouseOverItem}
      handleMouseOutItem={handleMouseOutItem}
    />
  );
};
