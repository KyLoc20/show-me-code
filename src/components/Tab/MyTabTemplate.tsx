import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { BackIcon, ForwardIcon } from "./widgets";

export default function MyTabTemplate({ children, currentTabKey, currentPath }: PropsWithChildren<{ currentTabKey: string; currentPath: string }>) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex space-x-2 mb-2 items-center mt-[-24px]">
        <button className="btn btn-circle btn-outline btn-sm" onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
        <button className="btn btn-circle btn-outline btn-sm" onClick={() => navigate(+1)}>
          <ForwardIcon />
        </button>
        <input disabled type="text" placeholder={currentPath} className="input input-bordered w-full max-w-md h-7 border-transparent bg-gray-100" />
      </div>
      <p className="my-2">
        Here is current status from query params: <button className="btn btn-xs cursor-default">{currentTabKey}</button>
      </p>
      <div className="w-full my-4 border-t-2 border-dashed border-gray-700"></div>
      {children}
      <div className="w-full my-4 border-t-2 border-dashed border-gray-700"></div>
    </>
  );
}
