import { FC } from "react";
import { Category } from "../../molecules/Category";
import type { CategoryItem } from "./hooks";
import { styles } from "./styles";

export type Props = {
  categoryList: CategoryItem[];
};

export const Presenter: FC<Props> = ({ categoryList }) => {
  return (
    <div style={styles.root}>
      <span style={styles.title}>カテゴリーから探す</span>
      <ul style={styles.list}>
        {categoryList.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </ul>
    </div>
  );
};
