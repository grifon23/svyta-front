import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { FC } from "react";
import "../../css/components/base-input.css";
import { ErrorRow } from "./elements";

interface IProps {
  value?: string;
  onChange?: (e: any) => void;
  error?: string;
  style?: any;
  type?: "email" | "number" | "password" | "text";
  placeholder?: string;
  width?: any;
  label: string;
  texterea?: boolean;
  disabled?: boolean;
}
export const BaseInput: FC<IProps> = ({
  width = "100%",
  label,
  texterea,
  disabled,
  style,
  ...props
}) => {
  console.log("value", props.value);
  return (
    <div style={{ width: width, ...style }} className={`input__wrapper `}>
      <label className="base-label">{label}</label>
      {texterea ? (
        <TextArea
          autoSize
          disabled={disabled}
          style={{
            width: width,
            minHeight: "100px",
            padding: 10,
            //border: error ? "1px solid red" : "",
          }}
          {...props}
          placeholder={props.placeholder}
          //onChange={props.onChange}

          //value={value}
        />
      ) : (
        <Input
          {...props}
          disabled={disabled}
          //style={{ border: error ? "1px solid red" : "" }}
          className="base-input"
        />
      )}

      {props.error && <ErrorRow error={props.error} />}
    </div>
  );
};
