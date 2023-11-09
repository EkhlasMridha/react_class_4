import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogLayout from "./layouts/BlogLayout";
import Dashboard from "./pages/dashboard/index";
import BasicLayout from "./layouts/BasicLayout";

export const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
