import type { PropsWithChildren } from "react";

type TailwindClass = string;

export const SmarterTruncate = ({
  children,
  className,
}: PropsWithChildren<{ className?: TailwindClass }>) => {
  const internalClassName = "truncate";
  const finalClassName = className
    ? `${internalClassName} ${className}`
    : internalClassName;
  return <div className={finalClassName}>{children}</div>;
};
