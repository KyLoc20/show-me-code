import clsx from "clsx";
import { useState } from "react";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";

export default function MyTabSmart({ items, activeKey, onChange }: MyTabProps) {
  const [innerActiveKey, setInnerActiveKey] = useState(activeKey != null ? activeKey : items[0].key);
  const currentActiveKey = innerActiveKey;

  console.log("RENDER MyTabSmart currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

  return (
    <>
      <nav>
        {items.map((tab) => (
          <a
            key={tab.key}
            onClick={() => {
              setInnerActiveKey(tab.key);
              onChange?.(tab.key);
            }}
            className={clsx("tab", currentActiveKey === tab.key && "tab-active")}
          >
            {tab.key}
          </a>
        ))}
      </nav>
      <ExampleContent items={items} currentActiveKey={currentActiveKey} />
    </>
  );
}
