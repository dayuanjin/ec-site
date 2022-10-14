import { useState } from "react";
import { useLocalStorage } from "../../../libs/hooks/useLocalStorage";
import { useRouter } from "../../../libs/hooks/useRouter";

export type HandleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
export type HandleClickShowPassword = () => void;
export type HandleClickLoginButton = () => void;
export type FormValue = {
  mailAddress: string;
  password: string;
  showPassword: boolean;
};

export type Hooks = {
  formValue: FormValue;
  handleChange: HandleChange;
  handleClickShowPassword: HandleClickShowPassword;
  handleClickLoginButton: HandleClickLoginButton;
};

export const useHooks = (): Hooks => {
  const router = useRouter();
  const [value, setValue, resetValue] = useLocalStorage<Partial<FormValue>>(
    "login_form",
    {}
  );
  const [formValue, setFormValue] = useState<FormValue>({
    mailAddress: value.mailAddress || "",
    password: value.password || "",
    showPassword: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setValue({ [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormValue((prev) => ({
      ...prev,
      showPassword: !formValue.showPassword,
    }));
  };

  const handleClickLoginButton = () => {
    router.push("/");
  };
  return {
    formValue,
    handleChange,
    handleClickShowPassword,
    handleClickLoginButton,
  };
};
