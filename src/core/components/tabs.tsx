import { Radio } from "antd";
import React, { CSSProperties, FC } from "react";
import { tabGendeOptions } from "../../module/products/config/tabs-gender.config";
import { Option } from "../../typing";
import "../../css/components/tabs.css";

interface IProps {
  items: Option[];
  onChange: (val: Option) => void;
  style?: CSSProperties;
  value: string;
}
export const Tabs: FC<IProps> = ({ items, onChange, style, value }) => {
  return (
    <div className="tabs" style={{ ...style }}>
      {items.map((it, index) => {
        return (
          <div style={{ marginRight: 10, height: 60 }} key={it.key}>
            <div
              onClick={() => onChange(it.key)}
              className={`tab ${it.key === value && "active-tab"}`}
            >
              <it.prefixIcon />
              <p
                style={{
                  marginLeft: 5,
                }}
              >
                {it.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
