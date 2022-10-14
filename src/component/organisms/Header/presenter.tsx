import { Button } from "@mui/material";
import { FC } from "react";
import { Navigation } from "../../molecules/Navigation";
import { SearchBox } from "../../molecules/SearchBox";
import { HandleClickTopButton } from "./hooks";
import { styles } from "./styles";

export type Props = {
  handleClickTopButton: HandleClickTopButton;
};

export const Presenter: FC<Props> = ({ handleClickTopButton }) => {
  return (
    <header style={styles.root}>
      <div style={styles.head}>
        <Button onClick={handleClickTopButton} aria-label="トップページ">
          <img src="vercel.svg" alt="logo" width={100} height={40} />
        </Button>
        <SearchBox />
        <Navigation />
      </div>
    </header>
  );
};
