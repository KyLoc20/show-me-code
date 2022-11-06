import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyTab from "../components/Tab/MyTabDumbOrSmart";
import { useStatusQueryParamSafely } from "../components/Tab/common";
import MyTabTemplate from "../components/Tab/MyTabTemplate";

export default function MyTabDumbOrSmartPage() {
  // console.log("RENDER MyTabDumbOrSmartPage");
  const getPath = (status: string) => `/my-tab/dumb-or-smart?status=${status}`;

  const navigate = useNavigate();
  const handleNavigate = (tabKeyName: string): void => {
    navigate(getPath(tabKeyName));
  };

  const currentTabKey = useStatusQueryParamSafely(getPath);
  const tabItems = [{ key: "todo" }, { key: "doing" }, { key: "done" }];

  const [isTabControlled, setIsTabControlled] = useState(false);

  return (
    <>
      <MyTabTemplate currentTabKey={currentTabKey} currentPath={getPath(currentTabKey)}>
        <MyTab items={tabItems} activeKey={currentTabKey} onChange={handleNavigate} controlled={isTabControlled} />
      </MyTabTemplate>
      <div className="flex items-center p-2 mb-2">
        <input
          type="checkbox"
          className="toggle"
          checked={isTabControlled}
          onChange={() => {
            setIsTabControlled((prev) => !prev);
          }}
        />
        <span className="ml-4 font-bold text-lg">{isTabControlled ? "Controlled" : "Not Controlled"}</span>
      </div>
    </>
  );
}
