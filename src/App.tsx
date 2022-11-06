import { Routes, Route, Navigate } from "react-router-dom";
import BasicLayout from "./components/layouts/BasicLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MyTabDumbPage from "./pages/MyTabDumbPage";
import MyTabSmartPage from "./pages/MyTabSmartPage";
import MyTabSmartButControlledPage from "./pages/MyTabSmartButControlledPage";
import MyTabDumbOrSmartPage from "./pages/MyTabDumbOrSmartPage";
import ShouldUseStateOrPropPage from "./pages/blog/ShouldUseStateOrPropPage";

export default function App() {
  console.log("RENDER App");
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="blog" />} />
        </Route>
        <Route path="/blog">
          <Route index element={<Navigate to="should-use-state-or-prop" />} />
          <Route path="should-use-state-or-prop" element={<ShouldUseStateOrPropPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/my-tab" element={<BasicLayout basePath="my-tab" />}>
          <Route path="dumb" element={<MyTabDumbPage />} />
          <Route path="smart" element={<MyTabSmartPage />} />
          <Route path="smart-but-controlled" element={<MyTabSmartButControlledPage />} />
          <Route path="dumb-or-smart" element={<MyTabDumbOrSmartPage />} />
          <Route path="all" element={<MyTabSmartPage />} />
        </Route>
      </Routes>
    </>
  );
}
