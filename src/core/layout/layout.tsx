import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../router/header/header";

export const PageLayout = () => {
  return (
    <div style={{ minHeight: "100%" }}>
      <Header />
      <div style={{ padding: "40px 55px" }}>
        <Outlet />
      </div>
    </div>
  );
};
