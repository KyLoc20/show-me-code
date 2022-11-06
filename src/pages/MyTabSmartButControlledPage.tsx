import { useNavigate } from "react-router-dom";
import MyTab from "../components/Tab/MyTabSmartButControlled";
import { useStatusQueryParamSafely } from "../components/Tab/common";

export default function MyTabSmartButControlledPage() {
  console.log("RENDER MyTabSmartButControlledPage");
  const getPath = (status: string) => `/my-tab/smart-but-controlled?status=${status}`;

  const navigate = useNavigate();
  const handleNavigate = (tabKeyName: string): void => {
    navigate(getPath(tabKeyName));
  };

  const currentTabKey = useStatusQueryParamSafely(getPath);
  const tabItems = [{ key: "todo" }, { key: "doing" }, { key: "done" }];

  return <MyTab items={tabItems} activeKey={currentTabKey} onChange={handleNavigate} />;
}
