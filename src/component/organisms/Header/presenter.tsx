import { LogoButton } from "../../atoms/LogoButton";
import { Navigation } from "../../molecules/Navigation";
import { SearchBox } from "../../molecules/SearchBox";
import { styles } from "./styles";

export const Presenter = () => {
  return (
    // <header style={styles.root}>
    <header style={styles.head}>
      <LogoButton />
      <SearchBox />
      <Navigation />
    </header>
    // </header>
  );
};
