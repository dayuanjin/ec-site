import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const SideMenu = () => {
  const { categoryList } = useHooks();
  return <Presenter categoryList={categoryList} />;
};
