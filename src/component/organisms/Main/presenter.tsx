import { ContentsBody } from "../ContentsBody";
import { SideMenu } from "../SideMenu";
import { styles } from "./styles";

export const Presenter = () => {
  return (
    <main style={styles.root}>
      <SideMenu />
      <ContentsBody />
    </main>
  );
};
