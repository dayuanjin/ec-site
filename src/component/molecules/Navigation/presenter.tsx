import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "../../atoms/IconButton";
import { styles } from "./styles";

export const Presenter = () => {
  return (
    <div style={styles.root}>
      <div>userName</div>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </div>
  );
};
