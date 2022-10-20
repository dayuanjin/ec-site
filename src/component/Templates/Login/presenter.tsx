import { Button } from "@mui/material";
import { MailAddressField } from "../../molecules/MailAddressField";
import { PasswordField } from "../../molecules/PasswordField";
import { Header } from "../../organisms/Header";
import {
  FormValue,
  HandleChange,
  HandleClickLoginButton,
  HandleClickShowPassword,
} from "./hooks";
import { styles } from "./styles";

export type Props = {
  formValue: FormValue;
  handleChange: HandleChange;
  handleClickShowPassword: HandleClickShowPassword;
  handleClickLoginButton: HandleClickLoginButton;
};

export const Presenter = (props: Props) => {
  return (
    <>
      <Header />
      <form style={styles.root}>
        <div style={styles.image}>
          <h1>
            <img src="vercel.svg" alt="logo" width={200} height={40} />
          </h1>
          <MailAddressField
            formValue={props.formValue}
            handleChange={props.handleChange}
          />
          <PasswordField
            formValue={props.formValue}
            handleChange={props.handleChange}
            handleClickShowPassword={props.handleClickShowPassword}
          />
          <Button
            sx={{
              color: "#333",
              alignSelf: "end",
              "&.MuiButton-root:hover": {
                backgroundColor: "#f7f6f5",
              },
            }}
            onClick={props.handleClickLoginButton}
            aria-label="パスワードをお忘れの方（再設定）"
          >
            <span>パスワードをお忘れの方（再設定）</span>
          </Button>
          <Button
            sx={styles.login}
            onClick={props.handleClickLoginButton}
            aria-label="ログイン"
          >
            <span>ログイン</span>
          </Button>
          <Button
            sx={styles.registration}
            onClick={props.handleClickLoginButton}
            aria-label="新規会員登録"
          >
            <span>新規会員登録</span>
          </Button>
        </div>
      </form>
    </>
  );
};
