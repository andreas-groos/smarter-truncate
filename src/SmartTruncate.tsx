import type { PropsWithChildren } from "react";

type TailwindClass = string;

export const SmartTruncate = ({
  children,
  className,
}: PropsWithChildren<{ className?: TailwindClass }>) => {
  return <div className={className}>{children}</div>;
};
