import { FC } from "react";
import { GoodsItem } from "../../molecules/GoodsItem";
import type { Goods } from "./hooks";
import { styles } from "./styles";

export type Props = {
  goodsList: Goods[];
};

export const Presenter: FC<Props> = ({ goodsList }) => {
  return (
    <div style={styles.root}>
      <ul style={styles.list}>
        {goodsList.map((item) => (
          <GoodsItem goods={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
