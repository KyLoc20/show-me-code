import clsx from "clsx";
import { useState, useEffect } from "react";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";

export default function MyTabSmartButControlled({ items, activeKey, onChange }: MyTabProps) {
  const [innerActiveKey, setInnerActiveKey] = useState(activeKey != null ? activeKey : items[0].key);

  useEffect(() => {
    if (activeKey != null) {
      setInnerActiveKey(activeKey);
    }
  }, [activeKey, innerActiveKey]);

  const currentActiveKey = innerActiveKey;
  console.log("RENDER MyTabSmartButControlled currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

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
