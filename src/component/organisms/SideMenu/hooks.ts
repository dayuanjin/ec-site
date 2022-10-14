export const categoryList = [
  { id: "1", name: "トップス" },
  { id: "2", name: "ジャケット/アウター" },
  { id: "3", name: "パンツ" },
  { id: "4", name: "スカート" },
  { id: "5", name: "ワンピース/ドレス" },
  { id: "6", name: "バッグ" },
  { id: "7", name: "小物" },
  { id: "8", name: "シューズ" },
];

export type CategoryItem = {
  id: string;
  name: string;
};

export type Hooks = {
  categoryList: CategoryItem[];
};

export const useHooks = (): Hooks => {
  return {
    categoryList,
  };
};
