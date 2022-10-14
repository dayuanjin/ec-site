import { FC } from "react";
import type { CategoryItem } from "../../organisms/SideMenu/hooks";
import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export type Props = {
  category: CategoryItem;
};

export const Category: FC<Props> = ({ category }) => {
  const { handleHoverCategory } = useHooks();
  return (
    <Presenter category={category} handleHoverCategory={handleHoverCategory} />
  );
};
