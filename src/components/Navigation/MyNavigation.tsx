import clsx from "clsx";
import { NavLink } from "react-router-dom";

export interface MyNavigationProps {
  items: { key: string; label: string }[];
}

export default function MyNavigation({ items }: MyNavigationProps) {
  return (
    <>
      <nav>
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
          {items.map((nav) => (
            <li key={nav.key}>
              <NavLink to={`${nav.key}`} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
