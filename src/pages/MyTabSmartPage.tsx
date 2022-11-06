import { useNavigate } from "react-router-dom";
import MyTab from "../components/Tab/MyTabSmart";
import { useStatusQueryParamSafely } from "../components/Tab/common";
import MyTabTemplate from "../templates/MyTabTemplate";

export default function MyTabSmartPage() {
  // console.log("RENDER MyTabSmartPage");
  const getPath = (status: string) => `/my-tab/smart?status=${status}`;

  const navigate = useNavigate();
  const handleNavigate = (tabKeyName: string): void => {
    navigate(getPath(tabKeyName));
  };

  const currentTabKey = useStatusQueryParamSafely(getPath);
  const tabItems = [{ key: "todo" }, { key: "doing" }, { key: "done" }];

  return (
    <>
      <MyTabTemplate
        currentTabKey={currentTabKey}
        currentPath={getPath(currentTabKey)}
        githubUrl="https://github.com/KyLoc20/show-me-code/blob/master/src/pages/MyTabSmartPage.tsx"
      >
        <MyTab items={tabItems} activeKey={currentTabKey} onChange={handleNavigate} />{" "}
      </MyTabTemplate>
    </>
  );
}
