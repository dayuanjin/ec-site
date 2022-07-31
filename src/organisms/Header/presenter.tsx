import { Logo } from "../../atoms/Logo";
import { Navigation } from "../../molecules/Navigation";
import { SearchBox } from "../../molecules/SearchBox";
import { styles } from "./styles";

export const Presenter = () => {
  return (
    <header style={styles.root}>
      <div style={styles.head}>
        <Logo />
        <SearchBox />
        <Navigation />
      </div>
    </header>
  );
};
