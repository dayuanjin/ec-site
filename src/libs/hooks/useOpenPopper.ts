import { useState } from "react";

export type HandleMouseOver = (
  event: React.MouseEvent<HTMLElement>,
  key: string
) => void;
export type HandleMouseOut = () => void;
export type AnchorEl = HTMLElement | null;

export const useOpenPopper = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popperKey, setPopperKey] = useState<string>("");
  const isOpen = Boolean(anchorEl);
  const handleMouseOver = (
    event: React.MouseEvent<HTMLElement>,
    key: string
  ) => {
    switch (key) {
      case "item":
        setPopperKey(key);
        setAnchorEl(event.currentTarget);
        break;
      case "favorite":
        setPopperKey(key);
        setAnchorEl(event.currentTarget);
        break;
      case "cart":
        setPopperKey(key);
        setAnchorEl(event.currentTarget);
        break;
    }
  };
  const handleMouseOut = () => {
    setPopperKey("");
    setAnchorEl(null);
  };
  return { anchorEl, isOpen, handleMouseOver, handleMouseOut, popperKey };
};
