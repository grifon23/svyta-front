import React, { CSSProperties, FC } from "react";
import { createStyleSheet } from "../helpers";

interface IProps {
  label: string;
  background?: string;
  style?: CSSProperties;
  mode?: "primary" | "default";
  colorLabel?: string;
}
export const Button: FC<IProps> = ({
  background = "green",
  style,
  label,
  mode = "default",
  colorLabel = "black",
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
    },
  };
  return (
    <div style={{ ...styles.container, ...style, ...styleMode[mode] }}>
      <p>{label}</p>
    </div>
  );
};

const styles = createStyleSheet({
  container: {
    padding: "15px",
    borderRadius: 5,
    cursor: "pointer",
  },
});
