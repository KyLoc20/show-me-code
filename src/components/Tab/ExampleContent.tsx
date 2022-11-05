import clsx from "clsx";
import { TabItem } from "./types";

export default function ExampleContent({ items, currentActiveKey }: { items: TabItem[]; currentActiveKey: string }) {
  const getColor = () => {
    const i = items.map((n) => n.key).indexOf(currentActiveKey);
    if (i < 1) return "border-gray-400 bg-gray-100";
    else if (i === 1) return "border-green-400 bg-green-100";
    else return "border-red-400 bg-red-100";
  };
  return (
    <section className={clsx("flex justify-center items-center mt-8 h-[192px] ", "font-black text-4xl", "border rounded-2xl", getColor())}>
      {currentActiveKey}
    </section>
  );
}
