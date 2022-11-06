import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon, ForwardIcon } from "../components/Tab/widgets";
import GithubLink from "../components/GithubLink";

export default function MyTabTemplate({
  children,
  currentTabKey,
  currentPath,
  githubUrl,
}: PropsWithChildren<{ currentTabKey: string; currentPath: string; githubUrl?: string }>) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mt-[-24px] mb-2 justify-between items-center">
        <div className="flex flex-grow space-x-2 items-center">
          <button className="btn btn-circle btn-outline btn-sm" onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
          <button className="btn btn-circle btn-outline btn-sm" onClick={() => navigate(+1)}>
            <ForwardIcon />
          </button>
          <input disabled type="text" placeholder={currentPath} className="input input-bordered w-full max-w-md h-7 border-transparent bg-gray-100" />
        </div>
        <GithubLink href={githubUrl} />
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
