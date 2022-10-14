import { Input } from "../../atoms/Input";
import { FormValue, HandleChange } from "../../Templates/Login/hooks";

export type Props = {
  formValue: FormValue;
  handleChange: HandleChange;
};

export const MailAddressField = (props: Props) => {
  return (
    <Input
      style={{
        marginTop: "20px",
        minWidth: "350px",
        padding: "10px 14px",
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
      name="mailAddress"
      type="text"
      value={props.formValue.mailAddress}
      onChange={(e) => props.handleChange(e)}
      placeholder="メールアドレス"
      disableUnderline
      aria-label="メールアドレスの入力"
    />
  );
};
