import { Outlet } from "react-router-dom";
export default function BasicLayout() {
  console.log("BasicLayout");
  return (
    <div className="flex p-8 min-h-screen">
      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <div className="flex-grow">
        <Outlet />
      </div>

      <ul className="menu bg-base-100 w-56 p-2 rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
