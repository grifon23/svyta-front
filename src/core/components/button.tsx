import React, { CSSProperties, FC } from "react";
import { createStyleSheet } from "../helpers";

interface IProps {
  label: string;
  background?: string;
  style?: CSSProperties;
  mode?: "primary" | "default";
  colorLabel?: string;
  onClick?: (e: any) => void;
  type?: "submit" | "button";
}
export const Button: FC<IProps> = ({
  background = "green",
  style,
  label,
  mode = "default",
  colorLabel = "black",
  onClick,
  type = "button",
}) => {
  const styleMode = {
    primary: {
      color: "white",
      backgroundColor: background,
      border: "none",
    },
    default: {
      color: colorLabel,
      border: "1px solid green",
      backgroundColor: "#fff",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...styles.container, ...style, ...styleMode[mode] }}
    >
      <p>{label}</p>
    </button>
  );
};

const styles = createStyleSheet({
  container: {
    padding: "10px",
    borderRadius: 5,
    cursor: "pointer",
    minWidth: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
