import { PropsWithChildren } from "react";
import clsx from "clsx";

export default function BlogTemplate({ children }: PropsWithChildren<{}>) {
  return <main className={clsx("blog-container", "flex flex-col max-w-[640px] mx-auto min-h-screen", "px-4")}>{children}</main>;
}
