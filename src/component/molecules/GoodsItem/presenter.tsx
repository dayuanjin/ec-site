import { Button } from "@mui/material";
import { FC } from "react";
import { Goods } from "../../organisms/ContentsBody/hooks";
import { styles } from "./styles";

export type Props = {
  goods: Goods;
};
export const Presenter: FC<Props> = ({ goods }) => {
  return (
    <li style={styles.root}>
      <Button style={styles.button}>
        <img
          src={goods.url}
          alt={goods.name}
          width={170}
          height={200}
          style={styles.image}
        />
      </Button>
      <div style={styles.catalog}>
        <span style={styles.brand}>{goods.brand}</span>
        <span style={styles.category}>{goods.category}</span>
        {/* TODO: 値段にカンマ */}
        <span style={styles.price}>¥{goods.price}</span>
      </div>
    </li>
  );
};
