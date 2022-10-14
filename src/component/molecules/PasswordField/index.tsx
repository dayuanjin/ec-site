import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Input } from "../../atoms/Input";
import {
  FormValue,
  HandleChange,
  HandleClickShowPassword,
} from "../../Templates/Login/hooks";

export type Props = {
  formValue: FormValue;
  handleChange: HandleChange;
  handleClickShowPassword: HandleClickShowPassword;
};

export const PasswordField = (props: Props) => {
  return (
    <Input
      style={{
        marginTop: "20px",
        minWidth: "350px",
        padding: "10px 14px",
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
      type={props.formValue.showPassword ? "text" : "password"}
      value={props.formValue.password}
      onChange={(e) => props.handleChange(e)}
      name="password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={props.handleClickShowPassword}
            edge="end"
          >
            {props.formValue.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      placeholder="パスワード"
      aria-label="パスワードの入力"
      disableUnderline
    />
  );
};
