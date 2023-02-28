import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LinkHeaderAtom } from "./atom/link";
import "./index.css";
import { ReactSVG } from "react-svg";

export const HeaderPage = () => {
  return (
    <div className="header-container">
      <Link style={{ color: "white" }} to={"/"}>
        SvytaLogo
      </Link>

      <div className="nav-container">
        <LinkHeaderAtom to="/">
          <p>Products</p>
        </LinkHeaderAtom>
        <LinkHeaderAtom to="contacts">
          <p>Contacts</p>
        </LinkHeaderAtom>
        <LinkHeaderAtom to="order">
          <p>Orders</p>
        </LinkHeaderAtom>
      </div>
    </div>
  );
};
