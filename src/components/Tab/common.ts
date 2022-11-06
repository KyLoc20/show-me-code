import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

/**
 * Make sure the query param status to be valid.
 *
 * If an invalid param required, it will use a default param like 'todo' instead without changing the param.
 * @param pathFn const getPath = (status: string) => `/my-tab/dumb?status=${status}`
 */
export function useStatusQueryParamSafely(pathFn?: (key: string) => string) {
  const [searchParams, _] = useSearchParams();
  let status = searchParams.get("status") as "todo" | "doing" | "done";
  const isValidStatus = ["todo", "doing", "done"].includes(status);
  if (!isValidStatus) {
    status = "todo";
  }
  return status;
}

/**
 * Make sure the query param status to be valid.
 *
 * If an invalid param required, it will replace it with a default param like 'todo'.
 * @param pathFn const getPath = (status: string) => `/my-tab/dumb?status=${status}`
 */
export function useStatusQueryParamCorrectly(pathFn: (key: string) => string) {
  const navigate = useNavigate();
  // make sure the query param status to be valid
  const [searchParams, _] = useSearchParams();
  let status = searchParams.get("status") as "todo" | "doing" | "done";
  const isValidStatus = ["todo", "doing", "done"].includes(status);
  if (!isValidStatus) {
    status = "todo";
  }
  useEffect(() => {
    if (!isValidStatus) {
      navigate(pathFn("todo"));
    }
  });
  return status;
}
