import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
} & LinkProps;

export const Anchor = (props: Props) => {
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  );
};
