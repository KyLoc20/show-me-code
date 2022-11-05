import { useSearchParams, useNavigate } from "react-router-dom";
import MyTab from "../components/Tab/MyTabSmart";

export default function MyTabSmartPage() {
  console.log("RENDER MyTabSmartPage");
  const getPath = (status: string) => `/my-tab/smart?status=${status}`;

  const navigate = useNavigate();
  const handleNavigate = (tabKeyName: string): void => {
    navigate(getPath(tabKeyName));
  };

  // make sure the query param status to be valid
  const [searchParams, _] = useSearchParams();
  let status = searchParams.get("status") as "todo" | "doing" | "done";
  if (!["todo", "doing", "done"].includes(status)) {
    status = "todo";
    navigate(getPath(status));
  }

  const currentTabKey = status;
  const tabItems = [{ key: "todo" }, { key: "doing" }, { key: "done" }];

  return <MyTab items={tabItems} activeKey={currentTabKey} onChange={handleNavigate} />;
}
