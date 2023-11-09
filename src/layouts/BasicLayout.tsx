import { Outlet } from "react-router-dom";
import "./BasicLayout.css";
import { HtmlHTMLAttributes } from "react";

interface BasicLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const BasicLayout = ({ children, ...restProps }: BasicLayoutProps) => {
  return (
    <div className="layout-basic" {...restProps}>
      <header className="app-header"></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
