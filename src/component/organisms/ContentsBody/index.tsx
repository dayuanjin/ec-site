import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const ContentsBody = () => {
  const { goodsList } = useHooks();
  return <Presenter goodsList={goodsList} />;
};
