import { FC } from "react";
import { Goods } from "../../organisms/ContentsBody/hooks";
import { Presenter } from "./presenter";

export type Props = {
  goods: Goods;
};

export const GoodsItem: FC<Props> = ({ goods }) => {
  return <Presenter goods={goods} />;
};
