import { Anchor } from "../Anchor";

export const Logo = () => {
  return (
    <div>
      <Anchor href="/">
        {/*TODO: backgroundでsvg挿入 */}
        <img src="vercel.svg" alt="logo" width={100} height={40} />
      </Anchor>
    </div>
  );
};