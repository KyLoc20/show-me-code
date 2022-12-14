import { useNavigate } from "react-router-dom";
import MyTab from "../components/Tab/MyTabDumb";
import { useStatusQueryParamSafely } from "../components/Tab/common";
import MyTabTemplate from "../templates/MyTabTemplate";

export default function MyTabDumbPage() {
  // console.log("RENDER MyTabDumbPage");
  const getPath = (status: string) => `/my-tab/dumb?status=${status}`;

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
        githubUrl="https://github.com/KyLoc20/show-me-code/blob/master/src/pages/MyTabDumbPage.tsx"
      >
        <MyTab items={tabItems} activeKey={currentTabKey} onChange={handleNavigate} />
      </MyTabTemplate>
    </>
  );
}
