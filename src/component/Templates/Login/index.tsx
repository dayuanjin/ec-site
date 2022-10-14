import { useHooks } from "./hooks";
import { Presenter } from "./presenter";

export const Login = () => {
  const {
    formValue,
    handleChange,
    handleClickShowPassword,
    handleClickLoginButton,
  } = useHooks();
  return (
    <Presenter
      formValue={formValue}
      handleChange={handleChange}
      handleClickShowPassword={handleClickShowPassword}
      handleClickLoginButton={handleClickLoginButton}
    />
  );
};
