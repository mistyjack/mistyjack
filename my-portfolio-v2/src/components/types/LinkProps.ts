import { LinkProps as NextLinkProps } from "next/link";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

export interface NextLinkComposedProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}
