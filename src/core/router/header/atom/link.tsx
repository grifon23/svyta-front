import React, { FC } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import "../index.css";
interface IProps {
  children: JSX.Element;
  to: string;
}
export const LinkHeaderAtom: FC<IProps> = ({ to, children }) => {
  const match = useMatch(to);
  return (
    <Link
      className="nav-link"
      to={to}
      style={{
        color: "white",
        borderBottom: match ? "1px solid #ffff" : "none",
      }}
    >
      {children}
    </Link>
  );
};
