import { Button } from "@mui/material";
import { Navigation } from "../../molecules/Navigation";
import { SearchBox } from "../../molecules/SearchBox";
import { HandleClickTopButton } from "./hooks";
import { styles } from "./styles";

export type Props = {
  handleClickTopButton: HandleClickTopButton;
};

export const Presenter = (props: Props) => {
  return (
    <header style={styles.root}>
      <div style={styles.head}>
        <Button onClick={props.handleClickTopButton} aria-label="トップページ">
          <img src="vercel.svg" alt="logo" width={100} height={40} />
        </Button>
        <SearchBox />
        <Navigation />
      </div>
    </header>
  );
};
