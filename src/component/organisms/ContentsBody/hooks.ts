import data from "../../../__mocks__/goodsList.json";

export type Goods = {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  url: string;
};

const goodsList = data.goodsList as Goods[];

export type Hooks = {
  goodsList: Goods[];
};

export const useHooks = (): Hooks => {
  return {
    goodsList,
  };
};
