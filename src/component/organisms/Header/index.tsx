import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const Header = () => {
  const { handleClickTopButton } = useHooks();
  return <Presenter handleClickTopButton={handleClickTopButton} />;
};
