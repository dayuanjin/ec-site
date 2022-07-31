import { useState } from "react";

export type HandleMouseOver = (event: React.MouseEvent<HTMLElement>) => void;
export type HandleMouseOut = () => void;
export type AnchorEl = HTMLElement | null;

export const useOpenPopper = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseOut = () => {
    setAnchorEl(null);
  };
  return { anchorEl, isOpen, handleMouseOver, handleMouseOut };
};
