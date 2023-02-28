import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../router/header/header";

export const PageLayout = () => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div style={{ padding: "0 55px" }}>
        <Outlet />
      </div>
    </div>
  );
};
