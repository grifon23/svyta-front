import Input from "antd/es/input/Input";
import { LiteralUnion } from "antd/es/_util/type";
import React from "react";
import { FC } from "react";

interface IProps {
  value: string;
  onChange: (val: any) => void;
  error?: string;
  type?: LiteralUnion<
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
  >;
  label: string;
}
export const BaseInput: FC<IProps> = ({
  value,
  onChange,
  error,
  type = "text",
  label,
}) => {
  return (
    <div>
      {label ? <p>{label}</p> : null}
      <Input value={value} onChange={onChange} type={type} />
      {error ? <p>{error}</p> : null}
    </div>
  );
};
