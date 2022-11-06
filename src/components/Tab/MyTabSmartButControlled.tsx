import clsx from "clsx";
import { useState, useEffect } from "react";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";
import GithubLink from "../GithubLink";

export default function MyTabSmartButControlled({ items, activeKey, onChange }: MyTabProps) {
  const [innerActiveKey, setInnerActiveKey] = useState(activeKey != null ? activeKey : items[0].key);

  useEffect(() => {
    if (activeKey != null) {
      setInnerActiveKey(activeKey);
    }
  }, [activeKey, innerActiveKey]);

  const currentActiveKey = innerActiveKey;
  // console.log("RENDER MyTabSmartButControlled currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

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
      <p className="my-2 relative">
        <GithubLink className="absolute right-0" href="https://github.com/KyLoc20/show-me-code/blob/master/src/components/Tab/MyTabSmartButControlled.tsx" />
        Here is activeKey from props: <button className="btn btn-xs cursor-default">{activeKey}</button>
      </p>
      <p className="my-2">
        Here is current active tab: <button className="btn btn-xs cursor-default">{currentActiveKey}</button>
      </p>
      <ExampleContent items={items} currentActiveKey={currentActiveKey} />
    </>
  );
}
