import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { HeaderPage } from "../router/header/header";
const { Header, Content, Footer } = Layout;

export const PageLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderPage />
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
