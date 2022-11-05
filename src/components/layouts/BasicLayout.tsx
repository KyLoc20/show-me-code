import { Outlet } from "react-router-dom";
export default function BasicLayout() {
  console.log("BasicLayout");
  return (
    <div>
      BasicLayout
      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
