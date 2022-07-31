import { Input } from "../../atoms/Input";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, InputProps } from "@mui/material";
import { styles } from "./styles";

export type Props = InputProps;

export const Presenter = (props: Props) => {
  return (
    <Input
      startAdornment={
        <InputAdornment position="start" sx={{ marginRight: "5px" }}>
          <SearchIcon />
        </InputAdornment>
      }
      placeholder="キーワード検索"
      style={styles.root}
      {...props}
    />
  );
};
