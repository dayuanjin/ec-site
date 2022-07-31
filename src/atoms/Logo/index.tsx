import { Anchor } from "../Anchor";

export const Logo = () => {
  return (
    <Anchor href="/">
      {/*TODO: backgroundでsvg挿入 */}
      <img src="vercel.svg" alt="logo" width={100} height={40} />
      {/* <span style={{ backgroundImage: "url('/vercel.svg')" }} /> */}
    </Anchor>
  );
};
