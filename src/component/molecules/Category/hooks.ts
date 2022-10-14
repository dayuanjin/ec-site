import { useState } from "react";

export type HandleHoverCategory = (value: string) => void;

export type Hooks = {
  handleHoverCategory: HandleHoverCategory;
};

export const useHooks = (): Hooks => {
  const [category, setCategory] = useState<string>("");
  const handleHoverCategory = (value: string) => {};

  return {
    handleHoverCategory,
  };
};
