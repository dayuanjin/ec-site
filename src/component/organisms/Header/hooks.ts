import { useRouter } from "../../../libs/hooks/useRouter";

export type HandleClickTopButton = () => void;

export type Hooks = {
  handleClickTopButton: HandleClickTopButton;
};

export const useHooks = (): Hooks => {
  const router = useRouter();
  const handleClickTopButton = () => {
    router.push("/");
  };
  return {
    handleClickTopButton,
  };
};
