import clsx from "clsx";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";

export default function MyTabDumb({ items, activeKey, onChange }: MyTabProps) {
  const outerActiveKey = activeKey != null ? activeKey : items[0].key;
  const currentActiveKey = outerActiveKey;

  console.log("RENDER MyTabDumb currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

  return (
    <>
      <nav>
        {items.map((tab) => (
          <a key={tab.key} onClick={() => onChange?.(tab.key)} className={clsx("tab", currentActiveKey === tab.key && "tab-active")}>
            {tab.key}
          </a>
        ))}
      </nav>
      <ExampleContent items={items} currentActiveKey={currentActiveKey} />
    </>
  );
}
