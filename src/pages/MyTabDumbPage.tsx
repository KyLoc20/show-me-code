import { useSearchParams, useNavigate } from "react-router-dom";
import MyTabDumb from "../components/Tab/MyTabDumb";

export default function MyTabDumbPage() {
  console.log("RENDER MyTabDumbPage");

  const navigate = useNavigate();
  const handleNavigate = (tabKeyName: string): void => {
    navigate(`/my-tab/dumb?status=${tabKeyName}`);
  };

  const [searchParams, _] = useSearchParams();
  let status = searchParams.get("status") as "todo" | "doing" | "done";
  if (!["todo", "doing", "done"].includes(status)) {
    status = "todo";
    navigate(`/my-tab/dumb?status=${status}`);
  }

  const currentTabKey = status;

  return <div>{<MyTabDumb items={[{ key: "todo" }, { key: "doing" }, { key: "done" }]} activeKey={currentTabKey} onChange={handleNavigate} />}</div>;
}
