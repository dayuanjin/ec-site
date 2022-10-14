import {
  AnchorEl,
  HandleMouseOut,
  HandleMouseOver,
  useOpenPopper,
} from "../../../libs/hooks/useOpenPopper";
import { useRouter } from "../../../libs/hooks/useRouter";

export type HandleClickLoginButton = () => void;

export type Hooks = {
  handleClickLoginButton: HandleClickLoginButton;
  anchorEl: AnchorEl;
  isOpen: boolean;
  handleMouseOver: HandleMouseOver;
  handleMouseOut: HandleMouseOut;
  popperKey: string;
};

export const useHooks = (): Hooks => {
  const router = useRouter();
  const handleClickLoginButton = () => {
    router.push("/login");
  };
  const { anchorEl, isOpen, handleMouseOver, handleMouseOut, popperKey } =
    useOpenPopper();
  return {
    handleClickLoginButton,
    anchorEl,
    isOpen,
    handleMouseOver,
    handleMouseOut,
    popperKey,
  };
};
