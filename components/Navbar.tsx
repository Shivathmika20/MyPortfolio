import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className" | "href"> {
  href: LinkProps["href"];
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = ({
  className,
  activeClassName,
  pendingClassName,
  href,
  ...props
}: NavLinkCompatProps) => {
  const combinedClassName = cn(className, activeClassName, pendingClassName);

  return (
    <Link href={href} className={combinedClassName} {...props} />
  );
};

NavLink.displayName = "NavLink";

export { NavLink };
