import { PropsWithChildren } from "react";
import clsx from "clsx";

export default function BlogTemplate({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className="h-[130px]"></div>
      <div className="h-[70px]"></div>
      <main className={clsx("blog-container", "flex flex-col max-w-[640px] mx-auto", "px-4")}>{children}</main>
    </>
  );
}
