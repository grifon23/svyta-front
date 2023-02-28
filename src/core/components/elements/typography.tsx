import React, { CSSProperties, FC } from "react";

const sizes = {
  es: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 22,
};

interface IProps {
  children: any;
  style?: CSSProperties;
  color?: string;
  mod?: keyof typeof sizes;
  weight?: "400" | "500" | "600" | "700";
}

export const Txt: FC<IProps> = ({
  children,
  color = "#000000",
  style,
  mod = "md",
  weight = "400",
}) => {
  return (
    <p
      style={{
        ...style,
        color: color,
        fontSize: sizes[mod],
        fontWeight: weight,
      }}
    >
      {children}
    </p>
  );
};
