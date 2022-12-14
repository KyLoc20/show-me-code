import clsx from "clsx";
import { MyTabProps } from "./types";
import ExampleContent from "./ExampleContent";
import GithubLink from "../GithubLink";

export default function MyTabDumb({ items, activeKey, onChange }: MyTabProps) {
  const outerActiveKey = activeKey != null ? activeKey : items[0].key;
  const currentActiveKey = outerActiveKey;

  // console.log("RENDER MyTabDumb currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

  return (
    <>
      <nav>
        {items.map((tab) => (
          <a key={tab.key} onClick={() => onChange?.(tab.key)} className={clsx("tab", currentActiveKey === tab.key && "tab-active")}>
            {tab.key}
          </a>
        ))}
      </nav>
      <p className="my-2 relative">
        <GithubLink className="absolute right-0" href="https://github.com/KyLoc20/show-me-code/blob/master/src/components/Tab/MyTabDumb.tsx" />
        Here is activeKey from props: <button className="btn btn-xs cursor-default">{activeKey}</button>
      </p>
      <p className="my-2">
        Here is current active tab: <button className="btn btn-xs cursor-default">{currentActiveKey}</button>
      </p>
      <ExampleContent items={items} currentActiveKey={currentActiveKey} />
    </>
  );
}
