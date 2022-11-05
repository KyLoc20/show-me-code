import clsx from "clsx";

export interface TabItem {
  key: string;
}

export interface MyTabProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (tabKeyName: string) => void; // navigate to link when clicking one tab
}

export default function MyTabDumb({ items, activeKey, onChange }: MyTabProps) {
  const outerActiveKey = activeKey != null ? activeKey : items[0].key;
  const currentActiveKey = outerActiveKey;

  console.log("RENDER KtTabDumb currentActiveKey: ", currentActiveKey, "activeKey: ", activeKey);

  return (
    <>
      <nav className="flex">
        {items.map((tab) => (
          /* eslint-disable jsx-a11y/anchor-is-valid */
          <a
            key={tab.key}
            onClick={() => {
              onChange?.(tab.key);
            }}
            className={clsx(
              "inline-flex items-center justify-center",
              "px-4 h-8",
              "relative cursor-pointer select-none transition-all",
              "border-b-2 border-gray-500",
              "text-[14px] leading-[28px] text-gray-700",
              currentActiveKey === tab.key ? "" : "border-opacity-20 text-opacity-20"
            )}
          >
            {tab.key}
          </a>
        ))}
      </nav>
      <Content items={items} currentActiveKey={currentActiveKey}></Content>
    </>
  );
}

function Content({ items, currentActiveKey }: { items: TabItem[]; currentActiveKey: string }) {
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
