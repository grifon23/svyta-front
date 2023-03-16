import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { FC } from "react";
import "../../css/components/base-input.css";
import { ErrorRow } from "./elements";

interface IProps {
  //value: string;
  //onChange?: (e: any) => void;
  //error?: string;
  style?: any;
  //type?: "email" | "number" | "password" | "text";
  //placeholder?: string;
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
  return (
    <div style={{ width: width, ...style }} className={`input__wrapper `}>
      <label className="base-label">{label}</label>
      {texterea ? (
        <TextArea
          autoSize
          disabled={disabled}
          style={{
            width: width,
            height: 90,
            padding: 10,
            //border: error ? "1px solid red" : "",
          }}
          {...props}
          //placeholder={props.placeholder}
          //onChange={props.onChange}
          className="base-input"
          //value={value}
        />
      ) : (
        <Input
          {...props}
          //type={type}
          //disabled={disabled}
          //style={{ border: error ? "1px solid red" : "" }}
          //placeholder={placeholder}
          //onChange={onChange}
          className="base-input"
          //value={value}
        />
      )}

      {/*{error && <ErrorRow error={error} />}*/}
    </div>
  );
};
