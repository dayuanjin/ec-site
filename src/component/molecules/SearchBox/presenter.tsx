import { Input } from "../../atoms/Input";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, InputProps } from "@mui/material";

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
      disableUnderline
      style={{
        minWidth: "300px",
        padding: "0 6px",
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
      {...props}
    />
  );
};
