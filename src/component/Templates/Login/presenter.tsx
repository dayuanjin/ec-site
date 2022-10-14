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
      <form
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          padding: "40px 125px 20px",
          textAlign: "center",
          backgroundColor: "#f7f6f5",
          border: "1px solid #f7f6f5",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            sx={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#333",
              color: "#fff",
              width: "200px",
              borderRadius: "50px",
              "&.MuiButton-root:hover": {
                backgroundColor: "#4D4D4F",
              },
            }}
            onClick={props.handleClickLoginButton}
            aria-label="ログイン"
          >
            <span>ログイン</span>
          </Button>
          <Button
            sx={{
              marginTop: "10px",
              color: "#333",
              "&.MuiButton-root:hover": {
                backgroundColor: "#f7f6f5",
              },
            }}
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
