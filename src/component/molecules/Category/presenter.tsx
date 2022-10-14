import { Button } from "@mui/material";
import { FC } from "react";
import { styles } from "./styles";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import type { HandleHoverCategory } from "./hooks";
import type { CategoryItem } from "../../organisms/SideMenu/hooks";

export type Props = {
  category: CategoryItem;
  handleHoverCategory: HandleHoverCategory;
};

export const Presenter: FC<Props> = ({ category, handleHoverCategory }) => {
  return (
    <li>
      <Button
        sx={styles.button}
        onMouseOver={() => handleHoverCategory(category.name)}
      >
        {category.name}
        <NavigateNextRoundedIcon />
      </Button>
    </li>
  );
};
