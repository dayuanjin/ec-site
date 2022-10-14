import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const Navigation = () => {
  const {
    handleClickLoginButton,
    anchorEl,
    isOpen,
    handleMouseOver,
    handleMouseOut,
    popperKey,
  } = useHooks();
  return (
    <Presenter
      handleClickLoginButton={handleClickLoginButton}
      anchorEl={anchorEl}
      isOpen={isOpen}
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      popperKey={popperKey}
    />
  );
};
