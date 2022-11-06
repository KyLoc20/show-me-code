import clsx from "clsx";
import { useState } from "react";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";
import GithubLink from "../GithubLink";

export default function MyTabDumbOrSmart({ items, activeKey, onChange, controlled }: MyTabProps & { controlled?: boolean }) {
  const [innerActiveKey, setInnerActiveKey] = useState(activeKey != null ? activeKey : items[0].key);
  const outerActiveKey = activeKey != null ? activeKey : items[0].key;
  const controlledByOuter = controlled ?? false;
  /**
   * if this is a controlled component (controlledByOuter === true)
   * currentActiveKey is equal to outerActiveKey, has nothing to do with the state of innerActiveKey
   */
  const currentActiveKey = controlledByOuter ? outerActiveKey : innerActiveKey;

  // console.log("RENDER MyTabDumbOrSmart controlledByOuter:", controlledByOuter, " currentActiveKey: ", currentActiveKey, " activeKey: ", activeKey);

  return (
    <>
      <nav>
        {items.map((tab) => (
          <a
            key={tab.key}
            onClick={() => {
              if (!controlledByOuter) setInnerActiveKey(tab.key);
              onChange?.(tab.key);
            }}
            className={clsx("tab", currentActiveKey === tab.key && "tab-active")}
          >
            {tab.key}
          </a>
        ))}
      </nav>
      <p className="my-2 relative">
        <GithubLink className="absolute right-0" href="https://github.com/KyLoc20/show-me-code/blob/master/src/components/Tab/MyTabDumbOrSmart.tsx" />
        Here is activeKey from props: <button className="btn btn-xs cursor-default">{activeKey}</button>
      </p>
      <p className="my-2">
        Here is current active tab: <button className="btn btn-xs cursor-default">{currentActiveKey}</button>
      </p>
      <ExampleContent items={items} currentActiveKey={currentActiveKey} />
    </>
  );
}
