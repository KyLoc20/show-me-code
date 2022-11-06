import { Outlet } from "react-router-dom";
import MyNavigation from "../Navigation/MyNavigation";

export default function BasicLayout({ basePath }: { basePath: string }) {
  console.log("BasicLayout", basePath);

  return (
    <div className="flex p-8 min-h-screen">
      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <MyNavigation items={MYTAB_NAVIGATIONS} />
    </div>
  );
}
const MYTAB_NAVIGATIONS = [
  { label: "Dumb", key: "dumb" },
  { label: "Smart", key: "smart" },
  { label: "Smart but controlled", key: "smart-but-controlled" },
  { label: "Dumb or smart", key: "dumb-or-smart" },
];
